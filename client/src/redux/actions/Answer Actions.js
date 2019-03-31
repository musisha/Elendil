import axios from 'axios';
import { ANSWERS_FETCHED, GET_ERRORS } from './types';

export const createQuestion = (newAnswer, history) => dispatch => {
    axios
        .post('/api/answers/create', newAnswer)
        .then(res => history.push('/'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            }),
        );
};

export const getAnswers = qid => dispatch => {
    axios
        .get(`/api/answers/of/${qid}`)
        .then(res =>
            dispatch({
                type: ANSWERS_FETCHED,
                payload: res.data,
            }),
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            }),
        );
};