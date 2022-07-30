import React from 'react';



class InputPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {
                name: "",
                lastname: "",
                gender: "",
                status: false
            }
        }
    }

    changeInput = (e) => {
        this.setState({
                data: {
                    ...this.state.data,
                    [e.target.name]: e.target.value
                }
            }
        )
    };

    changeRadio = () => {
        this.setState({
            ...this.state.data.status = true
        })
    };

    submitData = () => {
        console.log(this.state)
    }

    render() {
        return(
            <div>
                    <input type="text"
                           placeholder="Name"
                           name="name"
                           onChange={this.changeInput}/>

                    <input type="text"
                           placeholder="Lastname"
                           name="lastname"
                           onChange={this.changeInput}/>

                    <select name="gender" id="select" onChange={this.changeInput}>
                        <option value="">Выберите пол</option>
                        <option value="Man">Man</option>
                        <option value="Woman">Woman</option>
                    </select>

                    <input type="radio"
                           name="status"
                           onChange={this.changeRadio}/>
                <div>
                    <button onClick={this.submitData}>SEND</button>
                </div>
            </div>
        )
    }
}

export default InputPage;
