import mangoose from 'mangoose';

const productSchema = new mangoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
},{
    timestamps: true
});

const Product = mangoose.nodel('Product', productSchema);
//why its not products insted Product

export default Product;