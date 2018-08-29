import React from 'react';
import { Button} from 'antd';
import Header from './Header';
import CollectionCreateForm from './CollectionCreateForm';

import '../style/_app.css';


//the default page
class App extends React.Component {
    state = {
        visible: false,
    };
    showModal = () => {
        this.setState({ visible: true });
    }
    handleCancel = () => {
        this.setState({ visible: false });
    }

    handleCreate = () => {
        const form = this.form
        form.validateFields((err, values) => {
            if (err) {
                return ;
            }
            const result = {
                "status":"OK",
                "data":values
            };
            console.log(result) ;
            form.resetFields();
            this.setState({ visible: false });
        });
    }
    saveFormRef = (form) => {
        this.form = form;
    }
    render() {
        return (
            <div className="container">
                <Header/>
                <Button
                    type="primary"
                    onClick={this.showModal}
                >
                    New Enrollment
                </Button>
                <CollectionCreateForm
                    ref={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
            </div>
        );
    }
}


export default App;
