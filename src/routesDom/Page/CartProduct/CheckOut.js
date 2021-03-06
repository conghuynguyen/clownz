import { Drawer, Button, Form, Input, Select, InputNumber } from 'antd';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import dataCity from 'data.json';
import Loading from 'component/LoadingPage/index';
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 24,
    },
    lg: {
      span: 24,
    },
    xl: {
      span: 24,
    },
  },
  wrapperCol: {
    xs: {
      span: 0,
    },
    sm: {
      span: 24,
    },
  },
};
export default function CheckOut({
  visible,
  setVisible,
  useState,
  useEffect,
  dataCart,
  actionToCarAPI,
  token,
  loadingPostCartAPI,
}) {
  const { TextArea } = Input;
  const [form] = Form.useForm();
  // create state
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  // function
  const onChangeCity = (City) => {
    setCity(City);
  };
  const onChangeDistrict = (District) => {
    setDistrict(District);
  };

  // cho nay init paypal
  const initialOptions = {
    'client-id': 'Aeuphynkq8ate32HVXQjqPfsFp5RNF7dBSXicHOU4Wj_a5Vel039SzgH2f2iqwFvP_HNey0whyfxVjXO',
  };
  const [amount, setAmount] = useState(0);
  const currency = 'USD';

  const [type, setType] = useState('');
  const [thongtindonhang, setThongtindonhang] = useState({});
  const checkOutCart = (value) => {
    let totalSumCart = 0;
    if (dataCart.length > 0) {
      for (let index = 0; index < dataCart.length; index++) {
        totalSumCart += dataCart[index].product.price * dataCart[index].quantity;
      }
    }
    let tinhUSD = (totalSumCart / 23000).toFixed(2);
    const { city, district, commune, incubation, numberPhone, payment } = value;
    const cartInformation = {
      address: `${incubation} - ${commune} - ${district} - ${city}`,
      phone: numberPhone,
      totalSum: totalSumCart,
      cart: dataCart,
      payment: payment,
    };
    setType(payment);
    setThongtindonhang(cartInformation);
    setAmount(tinhUSD);
    //actionToCarAPI(cartInformation, token);
  };
  const huyy = () => {
    setType('');
  };
  // END

  /// EEND
  useEffect(() => {
    form.resetFields(['district']);
    form.resetFields(['commune']);
  }, [city]);
  useEffect(() => {
    form.resetFields(['commune']);
  }, [district]);

  // lua chon nut thanh toan
  const ButtonCOD = () => {
    const onlick = () => {
      actionToCarAPI(thongtindonhang, token);
    };
    return (
      <Button type="primary" onClick={onlick}>
        X??c nh???n thanh to??n COD
      </Button>
    );
  };
  const ButtonPayPal = () => {
    return (
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function () {
              // Your code here after capture the order
              actionToCarAPI(thongtindonhang, token);
            });
          }}
        />
      </PayPalScriptProvider>
    );
  };
  return (
    <>
      {loadingPostCartAPI && <Loading />}
      <div className="group-check-out">
        {!loadingPostCartAPI && (
          <Drawer
            title="Th??ng tin nh???n h??ng"
            width={500}
            onClose={() => setVisible(false)}
            visible={visible}
            className="container-checkout"
          >
            <Form {...formItemLayout} form={form} onFinish={checkOutCart}>
              <Form.Item
                name="city"
                label="T???nh/Th??nh ph???"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Vui l??ng ch???n t???nh ho???c th??nh ph??? b???n ??? !',
                  },
                ]}
              >
                <Select
                  showSearch
                  placeholder="T???nh/Th??nh ph???"
                  optionFilterProp="children"
                  onChange={onChangeCity}
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {dataCity.map((city, index) => (
                    <Option value={city.name} key={index}>
                      {city.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                name="district"
                label="Qu???n/Huy???n"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Vui l??ng ch???n qu???n ho???c huy???n n??i b???n !',
                  },
                ]}
              >
                <Select
                  showSearch
                  placeholder="Qu???n/Huy???n"
                  optionFilterProp="children"
                  onChange={onChangeDistrict}
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {dataCity.map(
                    (itemCity, index) =>
                      itemCity.name === city &&
                      itemCity.huyen.map((huyen) => (
                        <Option value={huyen.name} key={index}>
                          {huyen.name}
                        </Option>
                      ))
                  )}
                </Select>
              </Form.Item>
              <Form.Item
                name="commune"
                label="X??/Th??? Tr???n"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Vui l??ng ch???n x?? b???n ??? !',
                  },
                ]}
              >
                <Select
                  showSearch
                  placeholder="X??/Th??? Tr???n"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {dataCity.map(
                    (itemCity) =>
                      itemCity.name === city &&
                      itemCity.huyen.map(
                        (huyen) =>
                          huyen.name === district &&
                          huyen.xa.sort().map((xa, index) => (
                            <Option value={xa.name} key={index}>
                              {xa.name}
                            </Option>
                          ))
                      )
                  )}
                </Select>
              </Form.Item>
              <Form.Item
                name="incubation"
                label="???p/S??? Nh??/T??n ???????ng"
                rules={[
                  {
                    required: true,
                    message: '?????a ch??? c??? th??? !',
                  },
                ]}
              >
                <TextArea
                  maxLength={150}
                  placeholder="?????a ch??? c??? th???: ???p, s??? nh??, t??n ???????ng..."
                  rows={4}
                />
              </Form.Item>
              <Form.Item
                name="numberPhone"
                label="S??? ??i???n Tho???i"
                className="group-phone"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Vui l??ng nh???p ????ng s??? ??i???n tho???i !',
                  },
                ]}
              >
                <InputNumber min={0} type="number" max={999999999999} />
              </Form.Item>

              <Form.Item
                name="payment"
                label="Thanh to??n"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Vui l??ng ch???n phuong th???c thanh to??n',
                  },
                ]}
              >
                <Select onChange={huyy}>
                  <Option value="COD">Thanh to??n khi nh???n h??ng</Option>
                  <Option value="paypal">Thanh to??n b???ng Paypal</Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-register">
                  KI???M TRA
                </Button>
              </Form.Item>
            </Form>
            {type === 'COD' && <ButtonCOD />}
            {type === 'paypal' && <ButtonPayPal />}
          </Drawer>
        )}
      </div>
    </>
  );
}
