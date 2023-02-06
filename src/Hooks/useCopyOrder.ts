import { OrderProps } from "../Controllers/ordersController";

export const useCopyOrder = () => {
  const mountTextToCopy = (order: OrderProps): string => {
    return `Boa noite, gostaria de fazer um pedido: \n${order.items
      .map((item) => `\n1- ${item.request}`)
      .join("")}`;
  };

  const copyOrderToClipboard = (order: OrderProps) => {
    const textToCopy = mountTextToCopy(order);

    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(textToCopy);
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      return new Promise((res, rej) => {
        document.execCommand("copy") ? res("") : rej();
        textArea.remove();
      });
    }
  };

  return { copyOrderToClipboard };
};
