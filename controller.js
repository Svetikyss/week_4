const dreams = require("./db.json");
let globalId=4;
module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunets = ["A feather in the hand is better than a bird in the air", "A golden egg of opportunity falls into your lap this month.","A good friendship is often more important than a passionate romance.","A good time to finish up old tasks. ","A pleasant surprise is waiting for you."];
      
    
        let randomIndex = Math.floor(Math.random() * fortunets.length);
        let randomFortunet = fortunets[randomIndex];
      
        res.status(200).send(randomFortunet);
    },


    getAllDreams: (req, res) => {
        res.status(200).send(dreams);
      },
      createDream: (req, res) => {
        const { dream, goal, imageURL } = req.body;
        let newDream = {
          id: globalId,
         dream,
         goal,
          imageURL,
        };
       dreams.push(newDream);
        res.status(200).send(dreams);
        globalId++;
      },
      deleteDream:(req,res) => {
        let {id} = req.params
        let index = dreams.findIndex(dream1 => +dream.id === +id)
        if(index === -1){
            res.status(400).send(`dream not found`)
        } else {
            dreams.splice(index,1)
            res.status(200).send(dreams)
        }
      },



}