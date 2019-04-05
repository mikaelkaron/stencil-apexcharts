/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';


import {
  ApexOptions,
} from 'apexcharts';
import {
  ApexChartHeight,
  ApexChartType,
  ApexChartWidth,
  ApexOptionsSeries,
} from './components/apex-chart/apex-charts';


export namespace Components {

  interface ApexChart {
    /**
    * (optional) Height
    */
    'height'?: ApexChartHeight;
    /**
    * (optional) Options
    */
    'options'?: ApexOptions;
    /**
    * (optional) Series
    */
    'series'?: ApexOptionsSeries;
    /**
    * (optional) Type
    */
    'type'?: ApexChartType;
    /**
    * Updates the configuration object. The new config object is merged with the existing config object preserving the existing configuration.
    */
    'updateOptions': (newOptions: ApexCharts.ApexOptions, redrawPaths?: boolean, animate?: boolean) => Promise<void>;
    /**
    * (optional) Width
    */
    'width'?: ApexChartWidth;
  }
  interface ApexChartAttributes extends StencilHTMLAttributes {
    /**
    * (optional) Height
    */
    'height'?: ApexChartHeight;
    /**
    * (optional) Options
    */
    'options'?: ApexOptions;
    /**
    * (optional) Series
    */
    'series'?: ApexOptionsSeries;
    /**
    * (optional) Type
    */
    'type'?: ApexChartType;
    /**
    * (optional) Width
    */
    'width'?: ApexChartWidth;
  }
}

declare global {
  interface StencilElementInterfaces {
    'ApexChart': Components.ApexChart;
  }

  interface StencilIntrinsicElements {
    'apex-chart': Components.ApexChartAttributes;
  }


  interface HTMLApexChartElement extends Components.ApexChart, HTMLStencilElement {}
  var HTMLApexChartElement: {
    prototype: HTMLApexChartElement;
    new (): HTMLApexChartElement;
  };

  interface HTMLElementTagNameMap {
    'apex-chart': HTMLApexChartElement
  }

  interface ElementTagNameMap {
    'apex-chart': HTMLApexChartElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
