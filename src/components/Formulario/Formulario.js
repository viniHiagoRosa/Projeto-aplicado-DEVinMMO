import { useEffect, useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Comentarios, H3, MainFormulario, Nome, ParagrafoComentario, SecondaryFormulario } from './Formulario.styled';
import { useParams } from 'react-router-dom';
import styles from './Formulario.module.css'; 

const KEY_LOCALSTORAGE = 'COMENTARIOS';

export const Formulario = () => {
  const{ id } = useParams()
  const idGame = id;
  const [comentarioJogo, setComentarioJogo] = useState({});

  useEffect(() => {
    const comentariosStorage = localStorage.getItem(KEY_LOCALSTORAGE);
    if (comentariosStorage) {
      const items = JSON.parse(comentariosStorage);
      const filter = items.find((item) => item.id === idGame);
      setComentarioJogo(filter);
    }
  }, [idGame]);

  const handleSubmit = (values, { setSubmitting }) => {
    const comentariosStorage = localStorage.getItem(KEY_LOCALSTORAGE);

    const comentario = {
      id: Math.random().toString(16).slice(2),
      likes: 0,
      ...values,
    };

    const comentariosAtual = comentarioJogo?.comentarios ? [...comentarioJogo?.comentarios] : [];
    const novaListaComentarios = [{ id: idGame, comentarios: [...comentariosAtual, comentario] }];

    if (comentariosStorage) {
      const itemsLocalStorage = JSON.parse(comentariosStorage);
      const listaTodosComentariosSemJogoAtual = itemsLocalStorage.filter((item) => item.id !== idGame);

      localStorage.setItem(
        'COMENTARIOS',
        JSON.stringify([...listaTodosComentariosSemJogoAtual, ...novaListaComentarios])
      );
    } else {
      localStorage.setItem('COMENTARIOS', JSON.stringify(novaListaComentarios));
    }

    setComentarioJogo(...novaListaComentarios);
    setSubmitting(false);
  };

  const schema = Yup.object().shape({
    nome: Yup.string().required('Campo obrigatório'),
    email: Yup.string().required('Campo obrigatório').email('E-mail inválido'),
    comentario: Yup.string().required('Campo obrigatório'),
  });

  const initialValues = {
    nome: '',
    email: '',
    comentario: '',
  };

  return (
    <>
    <MainFormulario>

      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema} validateOnMount>
        {({ isSubmitting, resetForm, isValid }) => (
            <Form>
            <div>
            <H3>Comentários</H3>
            <Field name="nome" placeholder="Nome" className={styles.name}/>
            <ErrorMessage name="nome" style={{ color: 'black', fontWeight: 'bold'}} component="span" />

            <Field name="email" placeholder="E-mail" className={styles.email}/>
            <ErrorMessage name="email" style={{ color: 'black', fontWeight: 'bold'}} component="span" />

            </div>
            <Field name="comentario" placeholder="Comentário"  className={styles.comentario}/>
            <ErrorMessage name="comentario" style={{ color: 'black', fontWeight: 'bold' }} component="span" />

            <button type="submit" disabled={isSubmitting || !isValid}>
              Enviar
            </button>

            <button type="button" disabled={isSubmitting} onClick={resetForm}>
              Limpar
            </button>
          </Form>
        )}
      </Formik>

      {comentarioJogo?.comentarios?.map((item) => (
        <SecondaryFormulario>
            <Comentarios>
                < Nome>{item.nome}</ Nome>
            </Comentarios>

            <Comentarios>
                <ParagrafoComentario>{item.comentario}</ParagrafoComentario>
            </Comentarios>
        </SecondaryFormulario>

))}
</MainFormulario>
    </>
  );
};