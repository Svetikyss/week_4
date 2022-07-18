const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)



const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortunet/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune)

const dreamsContainer = document.querySelector('dreams-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4004/api/dreams`

const dreamsCallback = ({ data: dreams }) => displayDreams(dreams)
const errCallback = err => console.log(err.response.data)

const getAllDreams = () => axios.get(baseURL).then(dreamsCallback).catch(errCallback)
const createDream = body => axios.post(baseURL, body).then(dreamsCallback).catch(errCallback)
const deleteDream = id => axios.delete(`${baseURL}/${id}`).then(dreamsCallback).catch(errCallback)

function submitHandler(a) {
    a.preventDefault()

    let dream = document.querySelector('#dream')
    let goal = document.querySelector('#goal')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
       dream: dream.value,
       goal: goal.value,
    imageURL: imageURL.value
    }

    createDream(bodyObj)

    dream.value = ''
    goal.value = ''
    imageURL.value = ''
}



// form.addEventListener('submit', submitHandler)

getAllDreams()