# Curso Sass - Platzi

## Structure

__Partial__: This file does not will be compiled, and is this 
indicated by the underscore at the start of file name.

    _fileName.scss

__styles.scss__ is the main file where all other partials are 
imported and compiled.
    
    styles.scss -> compiled to -> styles.css

### Directories

__base__: HTML elements.
__lib__: mixins, functions, variables and settings.
__layout__: Mix of HTML elements, complex structures as header, 
footer, sections.

### Selective imports

file: styleguide-elements.scss
    @if styleguide == true {
        // Some code...
    }

file: styleguide.scss
    /* This allows only import code in block "if" of 
    styleguide-elements.scss if styleguide is true. */
    
    $styleguide: true;
    @import "styleguide-elements"

## Import

    @import "path/to/file.scss";


## Variables

    $key: value;
    $key: 2 * 1.5 * 1px
    
    // Variable escaping
    $size: 10;
    div {
      content: "#{$size}"
    }

## Nesting

    .btn {
        display: inline-block;
        color: $colorVar;
        .btn__ icon {
            font-size: .6px;
        }
        .btn--warning {
            background-color: $color-info;
        }
    }

    // & refers to parent
    .btn {
        display: inline-block;
        color: $colorVar;
        .&__ icon {
            font-size: .6px;
        }
        .&--warning {
            background-color: $color-info;
        }
    }

## Mixing

Allows re-use declarations and modify its value.

    @mixin max-width {
        max-width: 2014px;
        margin-left: auto;
        margin-right: auto;
    }

It is possible re-user a mixin in different declarations.
    
    .someClass {
    @include max-width;5
    background-color: #C010R
    }
    section {
        @include max-width;
        padding: $someVariable
    }

### Mixin with parameters

    $page-max-width: 800px;

    @mixin max-width( $maxwidth: $page-max-width ) {
        max-width: $maxwidth;
        margin-left: auto;
        margin-right: auto;
    }

    .container {
        @include max-width( 1200px )
    }

__@content__ Allows include a code block in a mixin instance.

    @mixin respond-to( $width ) {
        @media only screen and ( min-width: $width ){
            @content;
         }
    }
    
    section {
        background-color: blue;
       @include respond-to( 800px ){
            background-color: red;
        }
    }

## Extend

This characteristic is like as class inheritance.

    %btn {
      color: red;
      width: 50px;
    }
    
    .btn-info {
      @extend %btn;
      background: blue;
    }

## Built-in Functions

    lighten($color-grey, 25%)
    darken($color-grey, 25%)
    invert($color-grey)
    
[Functions documentations] (https://sass-lang.com/documentation/modules)

## Functions

    @function sum($num1, $num2) {
        @return $num1 + $num2;
    }

    .div {
        padding: suma(10px. 5px);
    }

## Array

    $fs: (
        big: 24px,
        normal: 16px,
        small: 14px,
        x-small: 12px
    );

    .p {
        font-size: map-get($fs, normal)
    }
    .small {
        color: $grey;
        font-size: map-get($fs, x-small);
    }
    
It's posible create an array of list:

    $flags:
        "mx" -576px -576px,
        "co" -960px -128px;

## list

    $font-weigths: normal bold italic;

## each loop
    
    @each $font in (normal, bold, italic) {
        .#{$font} {font-wight: $font;}
    }

    $font-weights: normal bold italic;
    @each $font in ($font-weights) {
        .#{$font} {font-wight: $font;}
    }

Loop of array of lists:
    
    @each $name, $position-x, $position-y in $flags {
        .flag_#{name} {
            background-position: $position-x $position-y
        }
    }

## for loop

    @for $i from 1 to 5 {
        .class-#{$i} {
            &:before {
                content: $i;
            }
        }
    }

## if

    @if $test == true {
        ...
    }
    @else {
        ...
    }
