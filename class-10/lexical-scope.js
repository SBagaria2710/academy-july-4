function parent() {
  let a = 20;

  function child() {
    console.log("Child: ", a);

    function grandChild() {
      console.log("Grandchild: ", a);
    }

    grandChild();
  }
  child();
}

function anotherParent() {
  console.log("Another Parent:", a);
}

parent();
anotherParent();
