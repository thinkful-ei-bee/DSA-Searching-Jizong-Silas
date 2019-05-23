const BinarySearchTree = require('./BinarySearchTree')

// Implement different tree traversals

const data = `25 15 50 10 24 35 70 4 12 18 31 44 66 90 22`
const dataArray = data.split(' ').map(num=>Number(num))

const Tree = new BinarySearchTree
for(num of dataArray){
  Tree.insert(num,num)
}

function rankingOutline(tree,indent) {
  
  // if(tree.key==null){
  //   console.log(`${tree.key}test1`)
  //   console.log(`${indent}\n`)  
  // }
  if(!tree.parent)
    {
      console.log(`${tree.key}`)
       
   }   
   else{
    console.log(`${indent}-${tree.key}`)
   }
    
  if (tree.left) {      
      rankingOutline(tree.left,' | |');      
  }
  

  if (tree.right) {    
     rankingOutline(tree.right,' |');     
  }
  
}

function inOrderToTree(arr){

}


function main(){
  console.log('Searching in a BST')
  //in order 14 15 19 25 27 35 79 89 90 91
  // pre order 35 25 15 14 19 27 89 79 91 90
  // we can tell 
  // from pre order, 35 is the root. 
  // then from pre order, we can reconstructor the tree as 
  //           35
  //          / \ 
  //        25   89
  //       / \   / \
  //     19  27 79  90 
  //    /             \
  //   15             91
  //  /
  //14  

  // post order 5 7 6 9 11 10 8 
  // find pre order 
  // 5,7,6    9,11,10
  //         8
  //        / \
  //       7  11
  //      / \ / \
  //     5  6 9 10
  
  
  console.log('Implement different tree traversals')
  console.log('Pre Order:\n',Tree.dfsPreOrder())
  console.log('In Order:\n',Tree.dfsInOrder())
  console.log('Post Order:\n',Tree.dfsPostOrder())
  console.log('Find the next commanding officer')
  rankingOutline(Tree,'')
}

main()
