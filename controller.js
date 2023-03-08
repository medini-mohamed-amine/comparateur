const pool = require ('./db');
const queries = require("./queries");


//les APIs de la table utilisateurs
const getUtilisateurs = (req,res) => {
    pool.query(queries.getUtilisateurs,(error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getUtilisateurById = (req,res) => {
    const idutilisateur = parseInt(req.params.idutilisateur);
    // const { idutilisateur } = req.body;
    pool.query(queries.getUtilisateurById, [idutilisateur] ,  (error,results) => {
        if (error) throw(error);
        res.status(200).json(results.rows)   
    })
}

const addUtilisateur = async (req,res) => {
    const { nom, prenom , email, role, password } = req.body;
    // check if email exists
    pool.query(queries.checkEmailExists, [email] ,(error,results) => {
        if (results.rows.length) {
            res.send("email already exists.");
        };
    });

    //add Utilisateur to db
    pool.query(queries.addUtilisateur,[ nom, prenom , email , role, password], (error, results) => {
        if (error) throw error;
        res.status(201).send("utilisateur created successfully");
        });
};  
     

const removeUtilisateur = (req, res) => {
    const idutilisateur = parseInt(req.params.idutilisateur);
    pool.query(queries.getUtilisateurById, [idutilisateur], (error,results) => {
        const noUtilisateurFound = !results.rows.length;
        if (noUtilisateurFound){
            res.send("Utilisateur does not exist in the database " );
        }
        pool.query(queries.removeUtilisateur, [idutilisateur], (error, results) => {
            if(error) throw error;
            res.status(200).send("Utilisateur removed successfully");
        });
    });
};


const updateUtilisateur = (req,res) => {
    const idutilisateur = parseInt(req.params.idutilisateur);
    const {nom } = req.body;
    // check if the utilisateur exist or no in the database 
    pool.query(queries.getUtilisateurById,[idutilisateur] , (error, results) => {
        const noUtilisateurFound = !results.rows.length;
        if (noUtilisateurFound){
            res.send("Utilisateur does not exist in the database " );
        }
    // update the utilisateur if he exists in the database
        pool.query(queries.updateUtilisateur, [nom , idutilisateur ] , (error,results) => {
            if (error) throw error;
            res.status(200).send("Utilisateur updated successfully ");
        });
    });
};


// les APIs de table avis

const getAvis = (req,res) => {
    pool.query(queries.getAvis,(error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};


const getAvisById = (req,res) => {
    const idavis = parseInt(req.params.idavis);
    pool.query(queries.getAvisById, [idavis] ,  (error,results) => {
        if (error) throw(error);
        res.status(200).json(results.rows)   
    })
}

const addAvis = async (req,res) => {
    const { clientavis } = req.body;
    //add Avis to db
    pool.query(queries.addAvis,[ clientavis], (error, results) => {
        if (error) throw error;
        res.status(201).send("avis created successfully");
        });
}; 

const removeAvis = (req, res) => {
    const idavis = parseInt(req.params.idavis);
    pool.query(queries.getAvisById, [idavis], (error,results) => {
        const noAvisFound = !results.rows.length;
        if (noAvisFound){
            res.send("avis does not exist in the database " );
        }
        pool.query(queries.removeAvis, [idavis], (error, results) => {
            if(error) throw error;
            res.status(200).send("avis removed successfully");
        });
    });
};

//les APIs de la table questions 

const getQuestions = (req,res) => {
    pool.query(queries.getQuestions,(error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getQuestionsById = (req,res) => {
    const idquestion = parseInt(req.params.idquestion);
    pool.query(queries.getQuestionsById, [idquestion] ,  (error,results) => {
        if (error) throw(error);
        res.status(200).json(results.rows)   
    })
};

const addQuestion = async (req,res) => {
    const { contenu } = req.body;
    //add question to db
    pool.query(queries.addAvis,[ contenu], (error, results) => {
        if (error) throw error;
        res.status(201).send("question created successfully");
        });
}; 


const removeQuestion = (req, res) => {
    const idquestion = parseInt(req.params.idquestion);
    pool.query(queries.getQuestionsById, [idquestion], (error,results) => {
        const noQuestionFound = !results.rows.length;
        if (noQuestionFound){
            res.send("question does not exist in the database " );
        }
        pool.query(queries.removeQuestion, [idquestion], (error, results) => {
            if(error) throw error;
            res.status(200).send("question removed successfully");
        });
    });
};

 



//les APIs de la table note

const getNotes = (req,res) => {
    pool.query(queries.getNotes,(error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getNotesById = (req,res) => {
    const idnote = parseInt(req.params.idnote);
    pool.query(queries.getNotesById, [idnote] ,  (error,results) => {
        if (error) throw(error);
        res.status(200).json(results.rows)   
    })
};


const addNote = async (req,res) => {
    const { nbreetoile } = req.body;
    //add note to db
    pool.query(queries.addNote,[ nbreetoile], (error, results) => {
        if (error) throw error;
        res.status(201).send("note created successfully");
        });
}; 


const removeNote = (req, res) => {
    const idnote = parseInt(req.params.idnote);
    pool.query(queries.getNotesById, [idnote], (error,results) => {
        const noNoteFound = !results.rows.length;
        if (noNoteFound){
            res.send("note does not exist in the database " );
        }
        pool.query(queries.removeNote, [idnote], (error, results) => {
            if(error) throw error;
            res.status(200).send("note removed successfully");
        });
    });
};

 
//les APIs de la table reponse


const getReponses = (req,res) => {
    pool.query(queries.getReponses,(error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getReponsesById = (req,res) => {
    const idreponse = parseInt(req.params.idreponse);
    pool.query(queries.getReponsesById, [idreponse] ,  (error,results) => {
        if (error) throw(error);
        res.status(200).json(results.rows)   
    })
};
const addReponse = async (req,res) => {
    const { reponseadmin} = req.body;
    //add reponse to db
    pool.query(queries.addReponse,[ reponseadmin], (error, results) => {
        if (error) throw error;
        res.status(201).send("reponse created successfully");
        });
}; 

const removeReponse = (req, res) => {
    const idreponse = parseInt(req.params.idreponse);
    pool.query(queries.getReponsesById, [idreponse], (error,results) => {
        const noReponseFound = !results.rows.length;
        if (noReponseFound){
            res.send("reponse does not exist in the database " );
        }
        pool.query(queries.removeReponse, [idreponse], (error, results) => {
            if(error) throw error;
            res.status(200).send("reponse removed successfully");
        });
    });
};

//les APIs de la table societe

const getSocietes = (req,res) => {
    pool.query(queries.getSocietes,(error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getSocietesById = (req,res) => {
    const idsociete = parseInt(req.params.idsociete);
    // const idsociete = parseInt(req.body);
    pool.query(queries.getSocietesById, [idsociete] ,  (error,results) => {
        if (error) throw(error);
        res.status(200).json(results.rows)   
    })
}


const addSociete = async (req,res) => {
    const { nomsociete,adresse,numerotel,email,prix,temps,poids} = req.body;
    //add societe to db
    pool.query(queries.addSociete,[ nomsociete,adresse,numerotel,email,prix,temps,poids], (error, results) => {
        if (error) throw error;
        res.status(201).send("societe created successfully");
        });
}; 

const updateSociete = (req,res) => {
    const idsociete = parseInt(req.params.idsociete);
    const {nomsociete } = req.body;
    // check if the societe exist or no in the database 
    pool.query(queries.getSocietesById,[idsociete] , (error, results) => {
        const noSocieteFound = !results.rows.length;
        if (noSocieteFound){
            res.send("societe does not exist in the database " );
        }
    // update the societe if he exists in the database
        pool.query(queries.updateSociete, [nomsociete , idsociete ] , (error,results) => {
            if (error) throw error;
            res.status(200).send("Societe updated successfully ");
        });
    });
};



const removeSociete = (req, res) => {
    const idsociete = parseInt(req.params.idsociete);
    pool.query(queries.getSocietesById, [idsociete], (error,results) => {
        const noSocieteFound = !results.rows.length;
        if (noSocieteFound){
            res.send("Societe does not exist in the database " );
        }
        pool.query(queries.removeSociete, [idsociete], (error, results) => {
            if(error) throw error;
            res.status(200).send("societe  removed successfully");
        });
    });
};


module.exports = {
    getUtilisateurs,
    getUtilisateurById,
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