//オプショナルパラメーター
export const isUserSignUp = (userId: string, username?: string): boolean => {
  if (userId === 'Hoge') {
    console.log('you signed up! your name is', username);
    return true;
  } else {
    console.log('you didnt sign up!');
    return false;
  }
};

//デフォルトパラメーター usernameが一致しなければNO NAMEとなる
export const isUserSignUp2 = (userId: string, username = 'NO NAME'): boolean => {
  if (userId === 'Hoge') {
    console.log('you signed up! your name is', username);
    return true;
  } else {
    console.log('you didnt sign up!');
    return false;
  }
};

//レストパラメーター
export const buy = (...allPrice: number[]): number => {
  return allPrice.reduce((totalPrice, prices) => {
    return totalPrice + prices;
  }, 0);
};
