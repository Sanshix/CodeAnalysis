/**
 * 创建规则
 */
import React, { useState, useEffect } from 'react';
import { toNumber, get } from 'lodash';
import { Modal, Form, Input, Select, message, Switch } from 'coding-oa-uikit';

import { CATEGORY, SEVERITY } from '../constants';
import { DEFAULT_PAGER } from '@src/utils/constant';

const { TextArea } = Input;
// const { Option } = Select;

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 19 },
};

interface CreateRuleProps {
  orgSid: string;
  toolId: number;
  toolDetail: any;
  languages: any;
  visible: boolean;
  data: any;
  onClose: () => void;
  onUpdate: (orgSid: string, toolId: number, ruleId: number, data: any) => Promise<any>;
  onAdd: (orgSid: string, toolId: number, data: any) => Promise<any>;
  callback: (pageStart?: number, pageSize?: number) => void;
}

const CreateRule = (props: CreateRuleProps) => {
  const { orgSid, toolId, languages, visible, data, onClose, onUpdate, onAdd, callback } = props;
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const isEdit = !!data.id;

  useEffect(() => {
    if (visible) {
      form.resetFields();
    }
  }, [visible]);

  const onFinish = (formData: any) => {
    const data = {
      ...formData,
      languages: formData.languages || [],
      checkruledesc: {
        desc: formData.checkruledesc,
        desc_type: 1,
      },
    };
    setLoading(true);
    if (isEdit) {
      onUpdate(orgSid, toolId, data.id, {
        real_name: data.real_name,
        ...data,
      }).then(() => {
        message.success('修改成功');
        callback();
        onClose();
      })
        .finally(() => {
          setLoading(false);
        });
    } else {
      onAdd(orgSid, toolId, data).then(() => {
        message.success('创建成功');
        callback(DEFAULT_PAGER.pageStart, DEFAULT_PAGER.pageSize);
        onClose();
      })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <Modal
      title={isEdit ? '编辑规则' : '创建规则'}
      width={600}
      visible={visible}
      okButtonProps={{ loading }}
      afterClose={form.resetFields}
      onCancel={onClose}
      onOk={() => form.validateFields().then(onFinish)}
    >
      <Form
        {...layout}
        form={form}
        initialValues={{
          ...data,
          checkruledesc: data?.checkruledesc?.desc,
        }}
      >
        {
          !isEdit && (
            <Form.Item
              label="规则唯一标识"
              name="real_name"
              rules={[{ required: true, message: '请输入规则名称' }]}
            >
              <Input placeholder="eg: files-not-found" readOnly={isEdit} />
            </Form.Item>
          )
        }
        <Form.Item
          label="规则名称"
          name="display_name"
          rules={[{ required: true, message: '请输入展示名称' }]}
        >
          <Input placeholder="请采用大驼峰命名，eg:FilesNotFound" />
        </Form.Item>
        <Form.Item
          label="规则简介"
          name="rule_title"
          rules={[{ required: true, message: '请输入规则描述' }]}
        >
          <TextArea
            rows={3}
            placeholder="简要描述规则的功能"
          />
        </Form.Item>
        <Form.Item
          label="详细描述"
          name="checkruledesc"
          rules={[{ required: true, message: '请输入规则详细描述' }]}
        >
          <TextArea
            rows={3}
            placeholder="详细描述规则"
          />
        </Form.Item>
        <Form.Item
          {...layout}
          label="类别"
          name="category"
          rules={[{ required: true, message: '请选择类别' }]}
        >
          <Select
            options={CATEGORY}
            placeholder="请选择类别"
          />
        </Form.Item>
        <Form.Item
          {...layout}
          label="严重级别"
          name="severity"
          rules={[{ required: true, message: '请选择严重级别' }]}
        >
          <Select placeholder="请选择严重级别">
            {Object.keys(SEVERITY).map(item => (
              <Select.Option key={item} value={toNumber(item)}>{get(SEVERITY, item)}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="适用语言"
          name="languages"
        >
          <Select
            mode="multiple"
            placeholder="默认为通用"
            options={languages.map((item: any) => ({ label: item.display_name, value: item.name }))}
          />
        </Form.Item>
        <Form.Item
          label="解决方法"
          name="solution"
          rules={[{ required: true, message: '请输入解决方法' }]}
        >
          <TextArea rows={3} />
        </Form.Item>
        <Form.Item
          label="规则参数"
          name="rule_params"
        >
          <TextArea rows={3} />
        </Form.Item>
        {
          isEdit && (
            <Form.Item
              label="是否失效"
              name="disable"
              valuePropName="checked"
            >
              <Switch />
            </Form.Item>
          )
        }
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) => prevValues.disable !== currentValues.disable
          }
        >
          {({ getFieldValue }) => getFieldValue('disable') && (
            <Form.Item
              label="失效原因"
              name="disabled_reason"
              rules={[{ required: true, message: '请输入失效原因' }]}
            >
              <TextArea rows={3} />
            </Form.Item>
          )}
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateRule;
