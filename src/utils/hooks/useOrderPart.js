const useOrderPart = (id, quantity) => {
  const orderPart = async () => {
    const response = await fetch(`http://localhost:9001/parts/${id}/receive`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({ quantity: quantity }),
    });
    return response.json();
  };

  return [orderPart];
};

export default useOrderPart;
