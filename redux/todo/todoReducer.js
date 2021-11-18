const initialState = {
    data: [
        { key: 0, title: 'Make Breakfast', completed: true },
        { key: 1, title: 'Eat Dinner', completed: false },
    ]
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO': 
            return {
                ...state,
                data: state.data.concat({
                    key: Math.random(),
                    title: action.payload,
                    completed: false
                })
            }
        case 'DELETE_TODO':
            return {
                ...state,
                data: state.data.filter(item => item.key != action.payload)
            }
        case 'UPDATE_TODO':
            return {
                ...state,
                data: state.data.map(todo => {
                    if (todo.key != action.payload.key) {
                        return todo;
                    } else {
                        return { ...todo, title: action.payload.title, completed: action.payload.completed }
                    }
                })   
            }
        default: return state;
    }
};

export default todoReducer;