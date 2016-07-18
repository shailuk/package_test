var app = angular.module("myApp", []);

app.directive("imageReplace", function () {

var image_element;
var thumbnail_Source;
var image_Source;
var height;
var width;
var zoom_height;
var zoom_width;
var link_tag;
var newElement; 



function compfunc(element, attributes) {

    // link_tag = element[0].childNodes[0].childNodes[1].childNodes[1];
  
    image_element = element[0].childNodes[1].childNodes[1].childNodes[1];
   
    thumbnail_Source = (element[0].attributes.thumbnail).value;

    image_element.attributes[0].value = thumbnail_Source;

    height = (element[0].attributes.height).value;

    width = (element[0].attributes.width).value;

    zoom_width = (element[0].attributes.zoom_width).value;

    zoom_height = (element[0].attributes.zoom_height).value;

    image_element.attributes[2].value = width;

    image_element.attributes[3].value = height;

    newElement = angular.element(document.createElement("IMG"));


     element.bind('mouseover', function ($scope) {             
         
        image_Source = (element[0].attributes.image).value;

        newElement.attr('src', image_Source);
                   
        newElement.attr('height', zoom_height);
        
        newElement.attr('width', zoom_width);
        
        angular.element(document.body).append(newElement);           

        });


          element.bind('mouseout', function ($scope) {             

          newElement.attr('src', null);
                   
          newElement.attr('height', null);
        
          newElement.attr('width', null);


        }); 

    }

    return {
        restrict: 'E',
        scope: { img_src: '=' },
        compile: compfunc,
         templateUrl: 'img.template.html',
           controller: function ($scope) {
            $scope.height = 180;                   //default height and width
            $scope.width = 160;
        }
        }
});
