export const logMessage = (messege: string): void => {
  console.log('sumple', messege);
};

export function logMessage2(messege: string): void {
  console.log('sumple2', messege);
}

export const logMessage3 = function (messege: string): void {
  console.log('sumple3', messege);
};

export const logMessage4 = (messege: string): void => {
  console.log('sumple4', messege);
};

// export const errorLog = (messege:string): never => {
//     throw new Error(messege);
// }

//シグネチャ（省略記法）
type Messages = (message: string) => void;

export const getMessage: Messages = (message) => {
  console.log('sumple5', message);
};

//シグネチャ２
type Messages2 = {
  (messege: string): void;
};

export const getMessage2: Messages2 = (messege) => {
  console.log('sumple6', messege);
};
