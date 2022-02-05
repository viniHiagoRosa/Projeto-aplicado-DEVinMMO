import { useEffect, useState } from 'react';

import { ErrorMessage, Field, Form, Formik } from 'formik';

import * as Yup from 'yup';
import { Paragrafo } from '../../pages/Game/Game.styled';
import { Comentarios, MainFormulario, Nome, SecondaryFormulario } from './Formulario.styled';

const KEY_LOCALSTORAGE = 'COMENTARIOS';

export const Formulario = () => {
  const idGame = '';
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

            <Field name="nome" placeholder="Nome" />
            <ErrorMessage name="nome" style={{ color: 'red' }} component="span" />

            <Field name="email" placeholder="E-mail" />
            <ErrorMessage name="email" style={{ color: 'red' }} component="span" />

            </div>
            <Field name="comentario" placeholder="Comentário" />
            <ErrorMessage name="comentario" style={{ color: 'red' }} component="span" />

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
                <Paragrafo>{item.comentario}</Paragrafo>
            </Comentarios>
        </SecondaryFormulario>

))}
    </MainFormulario>
    </>
  );
};