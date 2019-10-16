/**
 * @param {MessageEvent} evt mensaje recibido de la interfaz gráfica. La
 * property data tiene los datos enviados con hilo.postMessage(modelo). */
onmessage = evt => {
    // Calcula y envía de regreso la respuesta a la interfaz gráfica.
    // @ts-ignore
    if(evt.data.numero1 > 0 ){
      if(evt.data.numero2 > 0){
        var division=evt.data.numero1/evt.data.numero2;
        postMessage(`La división del número ${evt.data.numero1} y ${evt.data.numero2} es : `+division);
      }else{
        postMessage(` Digite otro numero diferente de 0`);
      }
    }else{
      postMessage(` Digite otro numero diferente de 0`);
    }
    
  };
  