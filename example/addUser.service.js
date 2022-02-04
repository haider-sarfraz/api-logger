import logDecorator from "../main.js"

const addUser = ({user}) => {
    return {
        status: 200,
        result: {...user}
    }
}

export const addUserService = logDecorator(addUser)
