const app = require('./app');
const UserModel = require('./model/user.model')
const TodoModel = require('./model/todo.model')


const port = 3000;


app.get('/', (req, res) => {
    res.send('Hello Adnan  ');
})

app.listen(port, () => {
    console.log(`Server listening on port : http://localhost:${port}`)
})