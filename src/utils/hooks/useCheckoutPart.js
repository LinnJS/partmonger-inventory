const useCheckoutPart = (id, quantity) => {
  const checkoutPart = async () => {
    const response = await fetch(`http://localhost:9001/parts/${id}/consume`, {
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

  return [checkoutPart];
};

export default useCheckoutPart;
