import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { initialValue, reducer, TYPES } from '../../helper/preco';

export const ExemplouseReducer = () => {
  //***Exemplo utilizando useState***
  // const [count, setCount] = useState(0);
  // return (
  //   <div style={{ display: 'flex', width: '100%', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
  //     <button style={{ padding: '10px' }} onClick={() => setCount(count - 1)}>
  //       -
  //     </button>
  //     <p style={{ padding: '10px' }}>{count}</p>
  //     <button style={{ padding: '10px' }} onClick={() => setCount(count + 1)}>
  //       +
  //     </button>
  //   </div>
  // );

  // const initialValue = { count: 0 };
  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case 'INCREMENT':
  //       return { count: state.count + 1 };
  //     case 'DECREMENT':
  //       return { count: state.count - 1 };
  //     case 'RESET':
  //       return initialValue;
  //     default:
  //       return state;
  //   }
  // };
  // const [state, dispatch] = useReducer(reducer, initialValue);

  // return (
  //   <div style={{ display: 'flex', width: '100%', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
  //     <button disabled={state.count === 0} style={{ padding: '10px' }} onClick={() => dispatch({ type: 'DECREMENT' })}>
  //       -
  //     </button>
  //     <p style={{ padding: '10px' }}>{state.count}</p>
  //     <button style={{ padding: '10px' }} onClick={() => dispatch({ type: 'INCREMENT' })}>
  //       +
  //     </button>
  //     <button style={{ padding: '10px' }} onClick={() => dispatch({ type: 'RESET' })}>
  //       reset
  //     </button>
  //   </div>
  // );

  const [state, dispatch] = useReducer(reducer, initialValue);

  const handleChangeValor = (e) => {
    dispatch({ type: TYPES.ALTERAR_PRECO, payload: { preco: e.target.value } });
  };

  const handleChangeDesconto = (e) => {
    dispatch({ type: TYPES.ALTERAR_DESCONTO, payload: { desconto: e.target.value } });
  };

  return (
    <div style={{ padding: '50px', display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1 style={{ paddingBottom: '10px' }}>{state?.descricao}</h1>

        <label style={{ paddingBottom: '10px' }}>
          Preço:
          <input type="number" value={state?.preco} onChange={handleChangeValor} />
        </label>
        <label style={{ paddingBottom: '10px' }}>
          Forma de pagamento:
          <select value={state?.desconto} onChange={handleChangeDesconto}>
            <option value={0}>(selecione)</option>
            <option value={20}>A vista</option>
            <option value={10}>A prazo</option>
          </select>
        </label>
        <p>{`Valor à pagar: ${state?.valorComDesconto}`}</p>
      </div>
    </div>
  );
};
