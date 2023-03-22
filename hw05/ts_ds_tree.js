"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Node(data) {
    var children;
    var parent;
    this.data = data;
    this.parent = null;
    this.children = [];
}
function Tree(data) {
    var node = new Node(data);
    this._root = node;
}
var Queue = /** @class */ (function () {
    function Queue() {
        this.arr = [];
    }
    Queue.prototype.enqueue = function (value) {
        this.arr.push(value);
    };
    Queue.prototype.dequeue = function () {
        return this.arr.shift();
    };
    Queue.prototype.isEmpty = function () {
        return this.arr.length == 0;
    };
    return Queue;
}());
//метод обходит дерево с поиском в глубину
Tree.prototype.traverseDF = function (callback) {
    // это рекурсивная и немедленно вызываемая функция 
    (function recurse(currentNode) {
        // Шаг 2 
        for (var i = 0, length = currentNode.children.length; i < length; i++) {
            // Шаг 3 
            recurse(currentNode.children[i]);
        }
        // Шаг 4 
        callback(currentNode);
        // Шаг 1 
    })(this._root);
};
//метод обходит дерево с поиском в ширину
Tree.prototype.traverseBF = function (callback) {
    var queue = new Queue();
    var currentTree;
    console.log('traverseBF');
    queue.enqueue(this._root);
    currentTree = queue.dequeue();
    while (currentTree) {
        for (var i = 0, length = currentTree.children.length; i < length; i++) {
            queue.enqueue(currentTree.children[i]);
        }
        callback(currentTree);
        currentTree = queue.dequeue();
    }
};
//метод поска элемента
Tree.prototype.contains = function (callback, traversal) {
    traversal.call(this, callback);
};
//медод  добавления элемента в укзанный узел
Tree.prototype.add = function (data, toData, traversal) {
    var parent = null;
    var child = new Node(data), callback = function (node) {
        if (node.data === toData) {
            parent = node;
        }
    };
    this.contains(callback, traversal);
    if (parent) {
        parent.children.push(child);
        child.parent = parent;
    }
    else {
        throw new Error('Cannot add node to a non-existent parent.');
    }
};
//метод удаления элемента
Tree.prototype.remove = function (data, fromData, traversal) {
    var parent = null;
    var tree = this, 
    // parent = null,
    childToRemove = null, index;
    var callback = function (node) {
        if (node.data === fromData) {
            parent = node;
        }
    };
    this.contains(callback, traversal);
    if (parent) {
        index = findIndex(parent.children, data);
        if (index === undefined) {
            throw new Error('Node to remove does not exist.');
        }
        else {
            childToRemove = parent.children.splice(index, 1);
        }
    }
    else {
        throw new Error('Parent does not exist.');
    }
    return childToRemove;
};
//метод определения индекса элемента
function findIndex(arr, data) {
    var index;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].data === data) {
            index = i;
        }
    }
    return index;
}
var tree = new Tree('Director');
tree._root.children.push(new Node('ZDOB'));
tree._root.children[0].parent = tree;
tree._root.children.push(new Node('ZDUP'));
tree._root.children[1].parent = tree;
tree._root.children.push(new Node('ZDEF'));
tree._root.children[2].parent = tree;
tree._root.children[0].children.push(new Node('UPTK'));
tree._root.children[0].children[0].parent = tree._root.children[0];
tree._root.children[0].children.push(new Node('UZ'));
tree._root.children[0].children[1].parent = tree._root.children[0];
tree._root.children[1].children.push(new Node('UO'));
tree._root.children[1].children[0].parent = tree._root.children[1];
tree._root.children[1].children.push(new Node('OSR'));
tree._root.children[1].children[1].parent = tree._root.children[1];
tree._root.children[1].children.push(new Node('OK'));
tree._root.children[1].children[2].parent = tree._root.children[1];
tree._root.children[2].children.push(new Node('FKO'));
tree._root.children[2].children[0].parent = tree._root.children[2];
tree._root.children[2].children.push(new Node('PEO'));
tree._root.children[2].children[1].parent = tree._root.children[2];
tree._root.children[2].children.push(new Node('OIMZO'));
tree._root.children[2].children[2].parent = tree._root.children[2];
//Обход дерева в глубину
console.log('Обход дерева в глубину');
tree.traverseDF(function (node) {
    console.log(node.data);
});
//Обход дерева в ширину 
//console.log('Обход дерева в ширину')
// tree.traverseBF(function(node) {
//     console.log(node.data)
// });
// Добавление персонала
tree.add('Петров П.П.', 'UPTK', tree.traverseDF);
tree.add('Иванов И.И.', 'UPTK', tree.traverseDF);
tree.add('Сидоров С.С.', 'UPTK', tree.traverseDF);
// Поиск UO
console.log('Поиск UPTK');
tree.contains(function (node) {
    if (node.data === 'UPTK') {
        console.log(node);
    }
}, tree.traverseBF);
// Поиск Иванова И.И.
console.log('Поиск Иванова И.И.');
tree.contains(function (node) {
    if (node.data === 'Иванов И.И.') {
        console.log(node);
    }
}, tree.traverseDF);
console.log(tree.findIndex(tree, 'УПТК'));
