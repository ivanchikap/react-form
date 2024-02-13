import './assets/scss/style.scss'
import { useState} from "react";

function App() {
    const [value, setValue] = useState({login: '', email: '', checked: false, radioValue: '', selectValue: ''})

    const inputHandler = (e) => {
        const {value, name, checked, type} = e.target;
        let newValue = value

        if (type === 'checkbox') {
            newValue = checked
        }

        setValue((prevValue) => ({
            ...prevValue,
            [name]: newValue
        }))
    }

    const formHandler = (e) => {
        e.preventDefault()
        console.log(value)
    }

    return (
        <div className="App">
            <div className="container">
                <form onSubmit={formHandler}>
                    <label className='form=group'>
                        <span>Type login</span>
                        <input placeholder='fredyk' onChange={inputHandler} className='form-control' value={value.login}
                               type="text" name='login'/>
                    </label>

                    <label className='form-group'>
                        <span>Type email</span>
                        <input placeholder='some@email.com' onChange={inputHandler} className='form-control'
                               value={value.email} type="text" name='email'/>
                    </label>
                    <label className='form-group'>
                        <span>Запам'ятати мене</span>
                        <input type="checkbox" checked={value.checked} name='checked' onChange={inputHandler} />
                    </label>
                    <div className='radio-group mx-4 my-2'>
                        <label className='form-group'>
                            <span>option1</span>
                            <input type="radio" name='radioValue' value='option1' checked={value.radioValue === 'option1'} onChange={inputHandler} />
                        </label>

                        <label className='form-group mx-2'>
                            <span>option2</span>
                            <input type="radio" name='radioValue' value='option2' checked={value.radioValue === 'option2'} onChange={inputHandler} />
                        </label>
                        <label className='form-group'>
                            <span>option3</span>
                            <input type="radio" name='radioValue' value='option3' checked={value.radioValue === 'option3'} onChange={inputHandler} />
                        </label>
                    </div>

                    <select name='selectValue' value={value.selectValue} onChange={inputHandler}>
                        <option value="">Choose</option>
                        <option value="option1">Option1</option>
                        <option value="option2">Option2</option>
                        <option value="option3">Option3</option>
                    </select>

                    <button className='btn btn-primary' type='submit'>Submit</button>
                </form>
            </div>

        </div>
    );
}

export default App;
