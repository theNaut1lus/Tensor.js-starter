// async function learnLinear()
// {
//   const model = tf.sequential();
//   model.add(tf.layers.dense({units: 1, inputShape: [1]}));
//
//   model.compile({
//     loss: 'meanSquareError',
//     optimiser: 'sgd'
//   });
//
//   const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1]);
//   const ys = tf.tensor2d([-3, -1, 1, 3, 5, 7], [6, 1]);
//
//   await model.fit(xs, xy, {epochs: 500});
//
//   document.getElementById('output_field').innerText = model.predict(tf.tensor2d([10,20,30], [3,1]));
// }
// learnLinear();

async function learnLinear(){
  const model = tf.sequential();
  model.add(tf.layers.dense({units: 1, inputShape: [1]}));
  model.compile({
   loss: 'meanSquaredError',
   optimizer: 'sgd'
  });

  const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1]);
  const ys = tf.tensor2d([-3, -1, 1, 3, 5, 7], [6, 1]);

  await model.fit(xs, ys, {epochs: 500});

  document.getElementById('output').innerText =
   model.predict(tf.tensor2d([10,20,35], [3, 1]));
 }
 // learnLinear();
 // equation is y = 2x-1

 function calculate(...arr) {
   for (var i = 0; i < arr.length; i++) {
    document.getElementById('actual').innerText += toString( 2*arr[i] - 1 );
   }
 }
 document.onload = learnLinear();

 calculate(10,20,35);
