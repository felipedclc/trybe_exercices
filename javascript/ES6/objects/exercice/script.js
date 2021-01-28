const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
    },
    order: {
        pizza: {
            margherita: {
                amount: 1,
                price: 25,
            },
            pepperoni: {
                amount: 1,
                price: 20,
            }
        },
        drinks: {
            coke: {
                type: 'Coca-Cola Zero',
                price: 10,
                amount: 1,
            }
        },
        delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5,
        }
    },
    payment: {
        total: 60,
    },
};

const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, telefone : ${order.phoneNumber}, ${order.address.street}, Nº ${order.address.number}, Nº ${order.address.number}, AP. Nº ${order.address.apartment}`)
}

customerInfo(order);

const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    const nameLuiz = order.order.delivery.deliveryPerson = 'Luiz Silva';
    const pizzas = Object.keys(order.order.pizza);
    const bebida = order.order.drinks.coke.type;
    const novoValor = order.payment.total = 50;
    console.log(`Olá ${nameLuiz}, o total do seu pedido de, ${pizzas} e ${bebida} é de R$ ${novoValor.toFixed(2)}`);
}

orderModifier(order);