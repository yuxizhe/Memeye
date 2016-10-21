'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * @Author: JerryC (huangjerryc@gmail.com)
 * @Date: 2016-10-21 11:36:04
 * @Last Modified by: JerryC
 * @Last Modified time: 2016-10-21 11:36:35
 * @Description
 */

exports.default = {
  processMemoryUsage: {
    name: 'ProcessMemoryUsage',
    events: {
      init: 'ProcessMemoryUsage:init',
      addPoint: 'ProcessMemoryUsage:addPoint'
    },
    options: {
      chart: {
        renderTo: 'process-memory-usage'
      },

      rangeSelector: {
        allButtonsEnabled: true,
        selected: 1,
        buttons: [{ type: 'second', count: 1, text: 'second' }, { type: 'minute', count: 1, text: 'minute' }, { type: 'minute', count: 60, text: 'hour' }]
      },

      xAxis: {
        type: 'datetime',
        minRange: 2 * 30 * 1000
      },

      yAxis: {
        title: {
          text: 'MB'
        },

        // TODO This dosen't work 
        labels: {
          formatter: function formatter() {
            return this.value / 1024 / 1024;
          }
        }
      },

      title: {
        text: 'Process Memory Usage'
      },

      series: [{
        name: 'rss',
        data: []
      }, {
        name: 'heapUsed',
        data: []
      }, {
        name: 'heapTotal',
        data: []
      }]
    }
  }
};