const getUtilisateurs = "select * from utilisateurs";
const getUtilisateurById = "select * from utilisateurs where idutilisateur =$1";
const checkEmailExists = "select s from utilisateurs s where s.email = $1";
const addUtilisateur = "insert into utilisateurs (nom, prenom, email, role, password) values($1, $2, $3, $4, $5)";
const removeUtilisateur = "delete from utilisateurs where idutilisateur = $1";
const updateUtilisateur = "update utilisateurs set nom = $1 where idutilisateur =$2";



const getAvis = "select * from avis";
const getAvisById = "select * from avis where idavis =$1";
const addAvis = "insert into avis (clientavis) values ($1)";
const removeAvis = "delete from avis where idavis = $1 ";



const getQuestions = "select * from questions";
const getQuestionsById = "select * from questions where idquestion =$1";
const addQuestion = "insert into questions (contenu) values ($1)";
const removeQuestion = "delete from questions where idquestion = $1 ";

const getNotes = "select * from notes";
const getNotesById = "select * from notes where idnote = $1";
const addNote = "insert into notes (nbreetoile) values ($1)";
const removeNote = "delete from notes where idnote = $1 ";



const getReponses = "select * from reponses";
const getReponsesById = "select * from reponses where idreponse = $1";
const addReponse = "insert into reponses (reponseadmin) values ($1)";
const removeReponse = "delete from reponses where idreponse = $1 ";


const getSocietes = "select * from societes";
const getSocietesById = "select * from societes where idsociete = $1";
const addSociete = "insert into societes (nomsociete,adresse,numerotel,email,prix,temps,poids) values($1, $2, $3, $4, $5 ,$6 ,$7)";
const updateSociete = "update societes set nomsociete =$1 where idsociete =$2";
const removeSociete = "delete from societes where idsociete = $1 ";






module.exports = {
    getUtilisateurs,
    getUtilisateurById,
    checkEmailExists,
    addUtilisateur,
    removeUtilisateur,
    updateUtilisateur,

    getAvis,
    getAvisById,
    addAvis,
    removeAvis,


    getQuestions,
    getQuestionsById,
    addQuestion,
    removeQuestion,


    getNotes,
    getNotesById,
    addNote,
    removeNote,

    getReponses,
    getReponsesById,
    addReponse,
    removeReponse,


    getSocietes,
    getSocietesById,
    addSociete,
    updateSociete,
    removeSociete,
    
};

