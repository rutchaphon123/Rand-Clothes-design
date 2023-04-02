function change() {
    const arr = [
      ['A-line', 'Asymmetrical', 'Balloon', 'Bell', 'Bias-cut', 'Bodycon', 'Bubble', 'Cape', 'Circle', 'Draped', 'Empire', 'Fit and flare', 'Flare', 'Godet', 'Halter', 'Handkerchief', 'Mermaid', 'Off-the-shoulder', 'Pencil', 'Peplum', 'Pleated', 'Shift', 'Shirt', 'Skater', 'Slip', 'Straight', 'Trapeze', 'Wrap'],
      ['straight', 'curved', 'zigzag', 'diagonal', 'dotted', 'dashed', 'wavy', 'parallel', 'perpendicular', 'horizontal', 'vertical', 'spiral', 'geometric', 'organic', 'angular', 'swirl', 'herringbone', 'checkerboard', 'plaid', 'tartan', 'paisley', 'striped', 'polka dot', 'animal print', 'camouflage', 'tie-dye', 'ombre'],
      ['black', 'white', 'gray', 'navy', 'blue', 'green', 'red', 'orange', 'yellow', 'purple', 'pink', 'brown', 'beige', 'olive', 'teal', 'maroon', 'magenta', 'turquoise', 'silver', 'gold', 'bronze', 'champagne', 'cream', 'peach', 'coral', 'mint', 'sky blue', 'lavender', 'violet', 'burgundy', 'mustard', 'khaki', 'emerald', 'royal blue', 'baby blue', 'salmon', 'rust', 'rose gold'],
      ['cotton', 'linen', 'wool', 'silk', 'polyester', 'rayon', 'nylon', 'denim', 'velvet', 'corduroy', 'suede', 'leather', 'lace', 'chiffon', 'satin', 'taffeta', 'organza', 'brocade', 'tulle', 'knit', 'crochet', 'fleece', 'faux fur', 'neoprene', 'canvas', 'jute', 'burlap']
    ];
    
    const randoms = arr.map((subArr) => Math.floor(Math.random() * subArr.length));
    
    document.getElementById("r1").textContent = arr[0][randoms[0]];
    document.getElementById("r2").textContent = arr[1][randoms[1]];
    document.getElementById("r3").textContent = arr[2][randoms[2]];
    document.getElementById("r4").textContent = arr[3][randoms[3]];
  }
  
    
