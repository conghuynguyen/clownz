import { useState, useEffect, useContext } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { unwrapResult } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';
import {
  Form,
  Input,
  Button,
  Checkbox,
  InputNumber,
  Select,
  Row,
  Col,
  Radio,
  Tag,
  Upload,
  Modal,
  notification,
} from 'antd';
// product
import MenuProduct from './MenuProduct';
import SizeProduct from './SizeProduct';
// userContext
import { UserContext } from 'contexts/UserContext';
// Css
import styleForm from './styleForm';
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export default function FormProduct({
  actionPostAddProduct,
  id_product,
  valuesEdit,
  actionUpdateProduct,
}) {
  const { Option } = Select;
  const [form] = Form.useForm();
  const { TextArea } = Input;
  //state
  const state = useContext(UserContext);
  const [token] = state.token;
  const [keyProduct, setKeyProduct] = useState('');
  const [productLine, setProductLine] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [previewImage, setPreviewImage] = useState('');
  const [linkNewProduct, setLinkNewProduct] = useState('');
  const [colorDefault, setColorDefault] = useState([]);
  const [fileListImage, setFileListImage] = useState([]);
  const [inputVisible, setInputVisible] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  // useEffect
  useEffect(() => {
    form.resetFields(['NSX']);
  }, [keyProduct]);
  useEffect(() => {
    if (valuesEdit) {
      form.setFieldsValue(valuesEdit);
      const { color, poster, key, NSX } = valuesEdit;
      setColorDefault([color]);
      setKeyProduct(key);
      setProductLine(NSX);
      if (poster) {
        setFileListImage(poster);
      }
    }
  }, [valuesEdit]);
  useEffect(() => {
    form.setFieldsValue({ NSX: productLine });
  }, [productLine]);
  //function from add and edit
  const onFinish = async (values) => {
    try {
      if (values) {
        const { name, size, price, sex, collections, productType, key, NSX, description } = values;
        const formData = new FormData();
        if (id_product) {
          setLoading(true);
          const imageOld = [];
          if (fileListImage.length < 4) {
            notification['error']({
              message: 'Th??ng B??o',
              description: 'Vui l??ng t???i l??n 4 ???nh',
            });
          } else {
            for (let index = 0; index < fileListImage.length; index++) {
              const element = fileListImage[index];
              if (element.uid) {
                formData.append('poster', fileListImage[index].originFileObj);
              }
              if (element.url) {
                imageOld.push(fileListImage[index]);
              }
            }
            const productUpdate = {
              name,
              size,
              price,
              sex,
              color: colorDefault,
              description,
              collections,
              productType,
              key,
              NSX,
              imageOld: imageOld,
              id_product: id_product,
            };
            formData.append('product', JSON.stringify(productUpdate));
            const resultProduct = await actionUpdateProduct(formData, token);
            const resProduct = unwrapResult(resultProduct);
            if (resProduct) {
              setLoading(false);
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
              let linkProduct = resProduct.product;
              setLinkNewProduct(
                `/detail-products?id_product=${linkProduct._id}&key=${linkProduct.key}`
              );
              notification['success']({
                message: 'Th??ng B??o !',
                description: 'C???p nh???t th??nh c??ng ',
              });
            }
          }
        }
        // add product
        if (!id_product) {
          setLoading(true);
          const productAdd = {
            name,
            size,
            price,
            sex,
            color: colorDefault,
            description,
            collections,
            productType,
            key,
            NSX,
          };
          // append data product
          for (var index = 0; index < fileListImage.length; index++) {
            formData.append('poster', fileListImage[index].originFileObj);
          }
          formData.append('product', JSON.stringify(productAdd));
          // Check Api Request
          const resultProduct = await actionPostAddProduct(formData, token);
          const resProduct = unwrapResult(resultProduct);
          if (resProduct) {
            setLoading(false);
            form.resetFields();
            setFileListImage([]);
            setColorDefault([]);
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
            let linkProduct = resProduct.product;
            setLinkNewProduct(
              `/detail-products?id_product=${linkProduct._id}&key=${linkProduct.key}`
            );
            notification['success']({
              message: 'Th??ng B??o !',
              description: 'Th??m m???i th??nh c??ng',
            });
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onChangeProduct = (key) => {
    setKeyProduct(key);
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleInputConfirm = () => {
    if (inputValue && colorDefault.indexOf(inputValue) === -1) {
      setColorDefault([...colorDefault, inputValue]);
      setInputValue('');
      setInputVisible(false);
    } else {
      setInputVisible(false);
      setInputValue('');
    }
  };
  const onCloseColor = (color) => {
    console.log(color);
    const newColor = colorDefault.filter((tag) => tag !== color);
    setColorDefault(newColor);
  };
  // image
  const handlePreview = async (file) => {
    try {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      setPreviewImage(file.url || file.preview);
      setPreviewVisible(true);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (f) => {
    const { file, fileList, event } = f;
    let isJpgOrPng =
      file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg';
    let isLt2M = file.size / 1024 / 1024 < 2;
    if (id_product) {
      //---------------delete image---------------
      if ((file && fileList.length === 0) || (file && fileList.length > 0 && !event)) {
        const newImage = [...fileListImage];
        const index = newImage.findIndex((image) => image.id === file.id);
        newImage.splice(index, 1);
        setFileListImage(newImage);
      }
      //---------------add image---------------
      if (fileList.length > 0 && event) {
        if (!isJpgOrPng) {
          notification['error']({
            message: 'Th??ng B??o',
            description: 'B???n ch??? c?? th??? t???i l??n t???p JPG / PNG / JPEG !',
          });
        }
        if (!isLt2M) {
          notification['error']({
            message: 'Th??ng b??o',
            description: 'H??nh ???nh ph???i nh??? h??n 2MB ',
          });
        }
      }
      if (isLt2M && isJpgOrPng) {
        setFileListImage(fileList);
      }
    }
    if (!id_product) {
      if (!isJpgOrPng) {
        notification['error']({
          message: 'Th??ng B??o',
          description: 'B???n ch??? c?? th??? t???i l??n t???p JPG / PNG / JPEG !',
        });
      }
      if (!isLt2M) {
        notification['error']({
          message: 'Th??ng b??o',
          description: 'H??nh ???nh ph???i nh??? h??n 2MB ',
        });
      }
      if (isLt2M && isJpgOrPng) {
        setFileListImage(fileList);
      }
    }
  };
  return (
    <>
      {linkNewProduct && (
        <h4>
          {' '}
          Click xem s???n ph???m v???a {id_product ? 'c???p nh???t' : 'th??m'}{' '}
          <Link to={linkNewProduct}>T???i ????y</Link>
        </h4>
      )}
      <h3>{id_product ? 'Ch???nh s???a' : 'Th??m m???i'} s???n ph???m </h3>
      <Form
        form={form}
        {...styleForm}
        onFinish={onFinish}
        className="from-add-product from-edit-product"
        name="product"
        hasFeedback={true}
      >
        <Form.Item
          label="T??n S???n Ph???m"
          hasFeedback
          name="name"
          rules={[{ required: true, message: 'Vui l??ng nh???p t??n s???n ph???m !' }]}
        >
          <TextArea rows={2} maxLength={100} />
        </Form.Item>
        <Form.Item
          hasFeedback
          label="Gi?? Ti???n"
          name="price"
          rules={[{ required: true, message: 'Vui l??ng nh???p gi?? ti???n' }]}
        >
          <InputNumber style={{ width: '100%' }} min={1} max={99999999} />
        </Form.Item>
        <Form.Item
          label="Gi???i T??nh"
          hasFeedback
          name="sex"
          rules={[{ required: true, message: 'Vui l??ng ch???n gi???i t??nh !' }]}
        >
          <Radio.Group>
            <Radio value="nam" defaultChecked>
              Nam
            </Radio>
            <Radio value="n???" defaultChecked>
              N???
            </Radio>
            <Radio value="nam, n???" defaultChecked>
              Nam, N???
            </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="Nh?? S???n Xu???t"
          hasFeedback
          name="key"
          rules={[{ required: true, message: 'Vui l??ng ch???n nh?? s???n xu???t !' }]}
        >
          <Select onChange={onChangeProduct}>
            {MenuProduct.map((product, index) => (
              <Option value={product.key} key={index}>
                {product.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="D??ng S???n Ph???m"
          hasFeedback
          name="NSX"
          rules={[{ required: true, message: 'Vui l??ng ch???n d??ng s???n ph???m !' }]}
        >
          <Select>
            {MenuProduct.map((product, index) =>
              product.productType.map(
                (type, index) =>
                  product.key === keyProduct && (
                    <Option value={type.type} key={index}>
                      {type.name}
                    </Option>
                  )
              )
            )}
          </Select>
        </Form.Item>
        <Form.Item
          label="B??? S??u T???p"
          hasFeedback
          name="collections"
          rules={[{ required: true, message: 'Vui l??ng nh???p b??? s??u t???p !' }]}
        >
          <TextArea rows={2} maxLength={100} />
        </Form.Item>
        <Form.Item
          label="Lo???i S???n Ph???m"
          hasFeedback
          name="productType"
          rules={[{ required: true, message: 'Vui l??ng nh???p lo???i s???n ph???m !' }]}
        >
          <TextArea rows={2} maxLength={100} />
        </Form.Item>
        <Form.Item
          label="M?? T??? S???n Ph???m"
          hasFeedback
          name="description"
          rules={[{ required: true, message: 'Vui l??ng nh???p n???i dung s???n ph???m !' }]}
        >
          <TextArea rows={11} />
        </Form.Item>
        <Form.Item
          label="T???i ???nh L??n"
          hasFeedback
          name="poster"
          rules={[
            {
              required: fileListImage.length < 1 || fileListImage.length < 4 ? true : false,
              message: 'Vui l??ng t???i 4 ???nh  l??n  !',
            },
          ]}
        ></Form.Item>
        <Upload
          listType="picture-card"
          accept=".jpg, .jpeg, .png"
          fileList={fileListImage}
          onPreview={handlePreview}
          onChange={handleChange}
          maxCount={4}
          multiple
        >
          {fileListImage.length >= 4 ? null : (
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>T???i ???nh l??n</div>
            </div>
          )}
        </Upload>
        <Modal
          visible={previewVisible}
          footer={null}
          onCancel={() => {
            setPreviewVisible(false);
          }}
        >
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
        <Form.Item
          label="M??u S???c"
          hasFeedback
          name="color"
          rules={[
            {
              required: colorDefault.length < 1 ? true : false,
              message: 'Vui l??ng th??m m??u cho s???n ph???m !',
            },
          ]}
        >
          {colorDefault.map((color, index) => (
            <Tag key={index} closable onClose={() => onCloseColor(color)} maxTagCount={3}>
              {color}
            </Tag>
          ))}
          {inputVisible && colorDefault.length < 5 && (
            <Input
              type="text"
              size="small"
              style={{
                display: 'block',
                margin: '10px auto',
                width: '200px',
                height: '30px',
              }}
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleInputConfirm}
              onPressEnter={handleInputConfirm}
            />
          )}
          {!inputVisible && colorDefault.length < 5 && (
            <Tag
              style={{
                display: 'block',
                margin: '10px auto',
                width: '100px',
              }}
              onClick={() => {
                setInputVisible(true);
              }}
            >
              <PlusOutlined /> Th??m m??u
            </Tag>
          )}
        </Form.Item>
        <Form.Item
          label="Ch???n Size"
          hasFeedback
          name="size"
          rules={[{ required: true, message: 'Vui l??ng nh???p m??u !' }]}
        >
          <Checkbox.Group style={{ width: '100%' }}>
            <Row>
              {SizeProduct.map((name, index) => (
                <Col span={8} key={index}>
                  <Checkbox value={name.value}>{name.size}</Checkbox>
                </Col>
              ))}
            </Row>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item>
          <Button style={{ marginTop: '10px' }} type="primary" htmlType="submit" loading={loading}>
            {id_product ? 'C???p Nh???t' : 'Th??m S???n Ph???m'}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
