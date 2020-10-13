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

## Import

    @import "path/to/file.scss";


## Variables

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
