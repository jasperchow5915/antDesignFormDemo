import React from 'react';
import { Form, Icon, Input, AutoComplete,DatePicker,Modal } from 'antd';
import '../style/_collectionCreateForm.css';


const FormItem = Form.Item;
const dateFormat = 'DD/MM/YYYY';
const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
};


const CollectionCreateForm = Form.create()(
    (props) => {
        const { visible, onCancel, onCreate, form } = props;
        const { getFieldDecorator,} = form;
        const dataSource = [
            'FIT5136 Software engineering',
            'FIT5057 Project management',
            'FIT5148 Distributed databases and big data',
            'FIT5046 Mobile and distributed systems',
        ];
        const configTime = {
            rules: [{
                type: 'object',
                required: true,
                message: 'Please select date!'
            }],
        };
        return (
            <Modal
                visible={visible}
                title="Enroll a new course"
                okText="Create"
                onCancel={onCancel}
                onOk={onCreate}
            >
                <Form
                    layout="vertical"
                    onSubmit={this.handleSubmit} className="enroll-form"
                >
                    <FormItem {...formItemLayout} label="Date">
                        {getFieldDecorator('date', configTime)(
                            <DatePicker format={dateFormat}/>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="Course">
                        {getFieldDecorator('course', {
                            rules: [{
                                required: true,
                            }],
                        })(
                            <AutoComplete
                                style={{ width: 350 }}
                                dataSource={dataSource}
                                placeholder="Input major"
                                filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                            />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="Name">
                        {getFieldDecorator('name', {
                            rules: [{
                                required: true,
                                message: 'Please input your full name',
                            }],
                        })(
                            <Input

                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Input name"
                            />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="Campus">
                        {getFieldDecorator('campus', {
                            rules: [{
                                // message: 'Please input your the commuting tool',
                            }],
                        })(
                            <Input
                                prefix={<Icon type="shop" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Input campus"
                            />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="Degree">
                        {getFieldDecorator('degree', {
                            rules: [{
                                // message: '',
                            }],
                        })(
                            <Input
                                prefix={<Icon type="rocket"  style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Iuput degree"
                            />
                        )}
                    </FormItem>
                </Form>
            </Modal>
        );
    }
);

export default CollectionCreateForm;