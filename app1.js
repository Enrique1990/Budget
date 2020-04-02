var budgetController = (function() {
    var x = 23;

    var add = function(a) {
        return x + a;
    }
    
    return {
        publicTest: function(b) {
            return add(b);
        }
    }
})();

var UIController = (function() {
    var y = 2020;

    var age = function(s) {
        return y - s;
    }

    return {
        publicAge : function(t){ 
        return age(t);
        }
     }
})();


var controller = (function(budgetCtrl, UICtrl){
    var z = budgetCtrl.publicTest(5);
    var w = UICtrl.publicAge(1990);
    return {
        anotherPublic: function() {
            
            console.log(z) ;
            console.log(w) ;
            
        }

    }
    
    
    
})(budgetController , UIController);var budgetController = (function() {
    var x = 23;

    var add = function(a) {
        return x + a;
    }
    
    return {
        publicTest: function(b) {
            return add(b);
        }
    }
})();

var UIController = (function() {
    var y = 2020;

    var age = function(s) {
        return y - s;
    }

    return {
        publicAge : function(t){ 
        return age(t);
        }
     }
})();


var controller = (function(budgetCtrl, UICtrl){
    var z = budgetCtrl.publicTest(5);
    var w = UICtrl.publicAge(1990);
    return {
        anotherPublic: function() {
            
            console.log(z) ;
            console.log(w) ;
            
        }

    }
    
    
    
})(budgetController , UIController);