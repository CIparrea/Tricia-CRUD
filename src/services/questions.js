import api from './apiConfig.js'

export const getQuestions = async () => {
    try{
        const response = await api.get("/questions");
        return response.data;
    }catch(error){
        console.error("Error getting all questions: ", error);
    }
};

export const getQuestion = async (id) => {
    try{
        const response = await api.get(`/questions/${id}`);
        return response.data;
    }catch(error){
        console.error("Error getting question: ", error);
    }
};

export const createQuestion = async (questionData) => {
    try{
        const response = await api.post("/questions",questionData)
        return response.data;
    }catch(error){
        console.error(error)
    }
};

export const editQuestion = async (id, questionData) => {
    try{
        const response = await api.put(`/questions/${id}`,questionData)
        return response.data;
    }catch(error){
        console.log(error)
    }
};

export const deleteQuestion = async (id) =>{
    try{
        const response = await api.delete(`/questions/${id}`)
        return response.data
    }catch(error){
        console.log(error)
    }
};