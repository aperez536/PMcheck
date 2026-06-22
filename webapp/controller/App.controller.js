sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
  "use strict";

  var MONTHS = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

  var CENTER_DATA = {
    "Centro A": {
      plant: "Planta 1",
      kpiBase: { otMonth: 124, outOfRange: 8.4, monthlyAverage: 67.2, criticalEquipments: 12 },
      trend: [62, 68, 74, 71, 60, 66, 69, 72, 73, 74, 79, 77],
      distribution: [
        { min: 45, avg: 58, max: 76 },
        { min: 47, avg: 61, max: 80 },
        { min: 44, avg: 57, max: 77 },
        { min: 48, avg: 60, max: 79 },
        { min: 43, avg: 55, max: 76 },
        { min: 46, avg: 58, max: 77 },
        { min: 47, avg: 59, max: 79 },
        { min: 45, avg: 60, max: 81 },
        { min: 44, avg: 62, max: 82 },
        { min: 48, avg: 63, max: 83 },
        { min: 47, avg: 61, max: 80 },
        { min: 46, avg: 60, max: 79 }
      ],
      heatmap: ["success", "success", "warning", "success", "success", "warning"],
      traceability: [
        { ot: "OT-0004501", date: "02/05/2024", center: "Centro A", equipment: "PV-101", variable: "Presion", value: 72.5, range: "60 - 70", deviation: "+3.6%", state: "Advertencia", action: "Revisar calibracion", statusState: "Warning", month: "May" },
        { ot: "OT-0004505", date: "05/05/2024", center: "Centro A", equipment: "PV-102", variable: "Presion", value: 69.8, range: "60 - 70", deviation: "-0.3%", state: "Normal", action: "Sin accion", statusState: "Success", month: "May" },
        { ot: "OT-0004510", date: "12/06/2024", center: "Centro A", equipment: "PV-101", variable: "Presion", value: 74.1, range: "60 - 70", deviation: "+5.8%", state: "Advertencia", action: "Ajuste preventivo", statusState: "Warning", month: "Jun" }
      ]
    },
    "Centro B": {
      plant: "Planta 2",
      kpiBase: { otMonth: 96, outOfRange: 6.1, monthlyAverage: 64.9, criticalEquipments: 7 },
      trend: [54, 58, 60, 57, 48, 53, 56, 58, 63, 68, 61, 60],
      distribution: [
        { min: 40, avg: 54, max: 73 },
        { min: 42, avg: 56, max: 75 },
        { min: 41, avg: 55, max: 74 },
        { min: 40, avg: 54, max: 72 },
        { min: 38, avg: 50, max: 70 },
        { min: 39, avg: 52, max: 71 },
        { min: 40, avg: 53, max: 72 },
        { min: 41, avg: 54, max: 73 },
        { min: 42, avg: 56, max: 75 },
        { min: 43, avg: 58, max: 77 },
        { min: 42, avg: 55, max: 74 },
        { min: 41, avg: 54, max: 73 }
      ],
      heatmap: ["success", "warning", "success", "success", "warning", "success"],
      traceability: [
        { ot: "OT-0004502", date: "03/05/2024", center: "Centro B", equipment: "BP-202", variable: "Presion", value: 59.0, range: "60 - 70", deviation: "-1.7%", state: "Normal", action: "Sin accion", statusState: "Success", month: "May" },
        { ot: "OT-0004511", date: "14/06/2024", center: "Centro B", equipment: "BP-201", variable: "Presion", value: 61.2, range: "60 - 70", deviation: "+0.2%", state: "Normal", action: "Sin accion", statusState: "Success", month: "Jun" },
        { ot: "OT-0004512", date: "21/06/2024", center: "Centro B", equipment: "BP-202", variable: "Presion", value: 71.1, range: "60 - 70", deviation: "+1.6%", state: "Advertencia", action: "Revisar sellos", statusState: "Warning", month: "Jun" }
      ]
    },
    "Centro C": {
      plant: "Planta 1",
      kpiBase: { otMonth: 88, outOfRange: 10.8, monthlyAverage: 69.8, criticalEquipments: 15 },
      trend: [58, 61, 67, 64, 55, 59, 61, 63, 70, 72, 74, 71],
      distribution: [
        { min: 42, avg: 58, max: 78 },
        { min: 43, avg: 60, max: 79 },
        { min: 44, avg: 61, max: 80 },
        { min: 42, avg: 59, max: 78 },
        { min: 41, avg: 56, max: 77 },
        { min: 43, avg: 58, max: 79 },
        { min: 44, avg: 60, max: 81 },
        { min: 45, avg: 62, max: 82 },
        { min: 46, avg: 64, max: 83 },
        { min: 47, avg: 65, max: 84 },
        { min: 46, avg: 63, max: 82 },
        { min: 45, avg: 62, max: 81 }
      ],
      heatmap: ["warning", "warning", "error", "warning", "warning", "error"],
      traceability: [
        { ot: "OT-0004503", date: "04/05/2024", center: "Centro C", equipment: "CP-301", variable: "Presion", value: 82.3, range: "60 - 70", deviation: "+17.6%", state: "Fuera de rango", action: "Parada y ajuste", statusState: "Error", month: "May" },
        { ot: "OT-0004513", date: "07/06/2024", center: "Centro C", equipment: "CP-302", variable: "Presion", value: 78.4, range: "60 - 70", deviation: "+11.7%", state: "Fuera de rango", action: "Parada y ajuste", statusState: "Error", month: "Jun" },
        { ot: "OT-0004514", date: "18/06/2024", center: "Centro C", equipment: "CP-301", variable: "Presion", value: 70.8, range: "60 - 70", deviation: "+1.1%", state: "Advertencia", action: "Revisar calibracion", statusState: "Warning", month: "Jun" }
      ]
    },
    "Centro D": {
      plant: "Planta 2",
      kpiBase: { otMonth: 102, outOfRange: 5.2, monthlyAverage: 66.4, criticalEquipments: 9 },
      trend: [60, 63, 66, 64, 58, 61, 62, 64, 67, 69, 71, 70],
      distribution: [
        { min: 43, avg: 56, max: 74 },
        { min: 44, avg: 57, max: 75 },
        { min: 45, avg: 58, max: 76 },
        { min: 44, avg: 57, max: 75 },
        { min: 42, avg: 55, max: 73 },
        { min: 43, avg: 56, max: 74 },
        { min: 44, avg: 57, max: 75 },
        { min: 45, avg: 58, max: 76 },
        { min: 46, avg: 60, max: 77 },
        { min: 47, avg: 61, max: 78 },
        { min: 46, avg: 60, max: 77 },
        { min: 45, avg: 59, max: 76 }
      ],
      heatmap: ["error", "warning", "error", "error", "warning", "error"],
      traceability: [
        { ot: "OT-0004504", date: "05/05/2024", center: "Centro D", equipment: "BP-401", variable: "Presion", value: 66.2, range: "60 - 70", deviation: "-0.3%", state: "Normal", action: "Sin accion", statusState: "Success", month: "May" },
        { ot: "OT-0004515", date: "10/06/2024", center: "Centro D", equipment: "BP-401", variable: "Presion", value: 68.0, range: "60 - 70", deviation: "+0.0%", state: "Normal", action: "Sin accion", statusState: "Success", month: "Jun" },
        { ot: "OT-0004516", date: "25/06/2024", center: "Centro D", equipment: "BP-402", variable: "Presion", value: 74.6, range: "60 - 70", deviation: "+6.6%", state: "Advertencia", action: "Ajuste programado", statusState: "Warning", month: "Jun" }
      ]
    },
    "Centro E": {
      plant: "Planta 3",
      kpiBase: { otMonth: 74, outOfRange: 4.7, monthlyAverage: 63.5, criticalEquipments: 5 },
      trend: [52, 54, 56, 55, 50, 52, 54, 55, 57, 60, 58, 57],
      distribution: [
        { min: 38, avg: 50, max: 68 },
        { min: 39, avg: 51, max: 69 },
        { min: 40, avg: 52, max: 70 },
        { min: 39, avg: 51, max: 69 },
        { min: 37, avg: 49, max: 67 },
        { min: 38, avg: 50, max: 68 },
        { min: 39, avg: 51, max: 69 },
        { min: 40, avg: 52, max: 70 },
        { min: 41, avg: 53, max: 71 },
        { min: 42, avg: 54, max: 72 },
        { min: 41, avg: 53, max: 71 },
        { min: 40, avg: 52, max: 70 }
      ],
      heatmap: ["success", "success", "success", "success", "warning", "success"],
      traceability: [
        { ot: "OT-0004517", date: "11/06/2024", center: "Centro E", equipment: "EP-101", variable: "Presion", value: 62.4, range: "60 - 70", deviation: "-0.1%", state: "Normal", action: "Sin accion", statusState: "Success", month: "Jun" },
        { ot: "OT-0004518", date: "23/06/2024", center: "Centro E", equipment: "EP-102", variable: "Presion", value: 67.1, range: "60 - 70", deviation: "+0.4%", state: "Normal", action: "Sin accion", statusState: "Success", month: "Jun" }
      ]
    }
  };

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function escapeXml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&apos;");
  }

  function createDataUri(svg) {
    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
  }

  function parseDateString(dateText) {
    var parts = dateText.split("/");
    return new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]));
  }

  function calculateAverage(values) {
    if (!values.length) {
      return 0;
    }

    return values.reduce(function (sum, value) {
      return sum + value;
    }, 0) / values.length;
  }

  function normalizeState(stateValue) {
    if (stateValue === "Error" || stateValue === "Fuera de rango") {
      return "error";
    }

    if (stateValue === "Warning" || stateValue === "Advertencia") {
      return "warning";
    }

    return "success";
  }

  function formatMonthLabel(dateValue) {
    return MONTHS[dateValue.getMonth()] + " " + dateValue.getFullYear();
  }

  function buildMonthWindow(endDate, windowSize) {
    var months = [];

    for (var index = windowSize - 1; index >= 0; index -= 1) {
      var monthDate = new Date(endDate.getFullYear(), endDate.getMonth() - index, 1);

      months.push({
        monthIndex: monthDate.getMonth(),
        label: formatMonthLabel(monthDate)
      });
    }

    return months;
  }

  function getCenterNames(selectedCenter) {
    if (selectedCenter && selectedCenter !== "Todos") {
      return [selectedCenter];
    }

    return Object.keys(CENTER_DATA);
  }

  function calculateKpis(centerNames) {
    return centerNames.reduce(function (accumulator, centerName) {
      var kpiBase = CENTER_DATA[centerName].kpiBase;
      accumulator.otMonth += kpiBase.otMonth;
      accumulator.outOfRange += kpiBase.outOfRange;
      accumulator.monthlyAverage += kpiBase.monthlyAverage;
      accumulator.criticalEquipments += kpiBase.criticalEquipments;
      accumulator.count += 1;
      return accumulator;
    }, { otMonth: 0, outOfRange: 0, monthlyAverage: 0, criticalEquipments: 0, count: 0 });
  }

  function calculateKpisFromRows(rows) {
    var totalRows = rows.length;
    var outOfRangeRows = 0;
    var totalValue = 0;
    var criticalEquipmentMap = {};

    rows.forEach(function (row) {
      totalValue += Number(row.value);

      if (row.statusState !== "Success") {
        outOfRangeRows += 1;
        criticalEquipmentMap[row.center + "|" + row.equipment] = true;
      }
    });

    return {
      otMonth: totalRows,
      outOfRange: totalRows ? (outOfRangeRows / totalRows) * 100 : 0,
      monthlyAverage: totalRows ? (totalValue / totalRows) : 0,
      criticalEquipments: Object.keys(criticalEquipmentMap).length
    };
  }

  function buildTrendSeries(centerNames, endDate) {
    return buildMonthWindow(endDate, 5).map(function (monthInfo) {
      var values = centerNames.map(function (centerName) {
        return CENTER_DATA[centerName].trend[monthInfo.monthIndex];
      });

      return {
        month: monthInfo.label,
        centerA: calculateAverage(values),
        centerB: calculateAverage(values) - 4
      };
    });
  }

  function buildDistributionSeries(centerNames, endDate) {
    return buildMonthWindow(endDate, 5).map(function (monthInfo) {
      var values = centerNames.map(function (centerName) {
        return CENTER_DATA[centerName].distribution[monthInfo.monthIndex];
      });

      return {
        month: monthInfo.label,
        min: calculateAverage(values.map(function (item) { return item.min; })),
        avg: calculateAverage(values.map(function (item) { return item.avg; })),
        max: calculateAverage(values.map(function (item) { return item.max; }))
      };
    });
  }

  function buildHeatmapRows(centerNames, selectedEquipment, traceability) {
    var allowedCenters = centerNames.reduce(function (map, centerName) {
      map[centerName] = true;
      return map;
    }, {});

    var grouped = {};

    traceability.forEach(function (row) {
      if (!allowedCenters[row.center]) {
        return;
      }

      if (!grouped[row.center]) {
        grouped[row.center] = {};
      }

      if (!grouped[row.center][row.equipment]) {
        grouped[row.center][row.equipment] = normalizeState(row.statusState);
        return;
      }

      if (grouped[row.center][row.equipment] !== "error" && normalizeState(row.statusState) === "error") {
        grouped[row.center][row.equipment] = "error";
        return;
      }

      if (grouped[row.center][row.equipment] === "success" && normalizeState(row.statusState) === "warning") {
        grouped[row.center][row.equipment] = "warning";
      }
    });

    return Object.keys(grouped).map(function (centerName) {
      var equipmentMap = grouped[centerName];
      var equipmentNames = selectedEquipment !== "Todos"
        ? [selectedEquipment]
        : Object.keys(equipmentMap).sort();

      return {
        center: centerName,
        equipment: equipmentNames.map(function (equipmentName) {
          return {
            name: equipmentName,
            state: equipmentMap[equipmentName]
          };
        }).filter(function (item) {
          return item.state !== undefined;
        })
      };
    }).filter(function (row) {
      return row.equipment.length > 0;
    });
  }

  function buildTraceability(centerNames, selectedVariable, selectedEquipment, fromDate, toDate) {
    var allowed = centerNames.reduce(function (map, centerName) {
      map[centerName] = true;
      return map;
    }, {});

    return Object.keys(CENTER_DATA).reduce(function (rows, centerName) {
      if (!allowed[centerName]) {
        return rows;
      }

      CENTER_DATA[centerName].traceability.forEach(function (row) {
        var rowDate = parseDateString(row.date);

        if (selectedVariable !== "Todos" && row.variable !== selectedVariable) {
          return;
        }

        if (selectedEquipment !== "Todos" && row.equipment !== selectedEquipment) {
          return;
        }

        if (fromDate && rowDate < fromDate) {
          return;
        }

        if (toDate && rowDate > toDate) {
          return;
        }

        rows.push(clone(row));
      });

      return rows;
    }, []).sort(function (left, right) {
      return parseDateString(right.date) - parseDateString(left.date);
    });
  }

  function createLineChartSvg(series) {
    var width = 820;
    var height = 280;
    var padding = { top: 75, right: 28, bottom: 42, left: 52 };
    var plotWidth = width - padding.left - padding.right;
    var plotHeight = height - padding.top - padding.bottom;
    var values = series.reduce(function (all, item) {
      all.push(item.centerA, item.centerB, 70);
      return all;
    }, []);
    var minValue = Math.min.apply(Math, values) - 8;
    var maxValue = Math.max.apply(Math, values) + 8;

    function xPosition(index) {
      return padding.left + (plotWidth * index) / (series.length - 1);
    }

    function yPosition(value) {
      return padding.top + ((maxValue - value) * plotHeight) / (maxValue - minValue);
    }

    function polylinePoints(valuesList) {
      return valuesList.map(function (value, index) {
        return xPosition(index).toFixed(1) + "," + yPosition(value).toFixed(1);
      }).join(" ");
    }

    var centerA = series.map(function (item) { return item.centerA; });
    var centerB = series.map(function (item) { return item.centerB; });
    var controlBandTop = yPosition(80);
    var controlBandBottom = yPosition(60);
    var controlBandHeight = controlBandBottom - controlBandTop;

    return createDataUri([
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + width + ' ' + height + '" preserveAspectRatio="none">',
      '<rect width="' + width + '" height="' + height + '" rx="20" fill="#fbfdff" />',
      '<text x="24" y="24" fill="#183153" font-size="14" font-family="Segoe UI, Arial" font-weight="700">Tendencia mensual por Centro (Promedio)</text>',
      '<rect x="' + padding.left + '" y="' + controlBandTop.toFixed(1) + '" width="' + plotWidth + '" height="' + controlBandHeight.toFixed(1) + '" fill="#e0f2fe" opacity="0.3" rx="2" />',
      '<line x1="' + padding.left + '" y1="' + yPosition(70).toFixed(1) + '" x2="' + (width - padding.right) + '" y2="' + yPosition(70).toFixed(1) + '" stroke="#ef4444" stroke-width="3" stroke-dasharray="6 6" />',
      '<polyline points="' + polylinePoints(centerA) + '" fill="none" stroke="#2f6fed" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />',
      '<polyline points="' + polylinePoints(centerB) + '" fill="none" stroke="#14b8a6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />',
      centerA.map(function (value, index) {
        return '<circle cx="' + xPosition(index).toFixed(1) + '" cy="' + yPosition(value).toFixed(1) + '" r="5" fill="white" stroke="#2f6fed" stroke-width="2" />';
      }).join(""),
      centerB.map(function (value, index) {
        return '<circle cx="' + xPosition(index).toFixed(1) + '" cy="' + yPosition(value).toFixed(1) + '" r="5" fill="white" stroke="#14b8a6" stroke-width="2" />';
      }).join(""),
      series.map(function (item, index) {
        return '<text x="' + xPosition(index).toFixed(1) + '" y="' + (height - 16) + '" fill="#5d6b82" font-size="12" font-family="Segoe UI, Arial" text-anchor="middle">' + item.month + '</text>';
      }).join(""),
      '<rect x="24" y="44" width="10" height="10" rx="2" fill="#2f6fed" />',
      '<text x="38" y="52" fill="#56657b" font-size="11" font-family="Segoe UI, Arial">Centro A</text>',
      '<rect x="145" y="44" width="10" height="10" rx="2" fill="#14b8a6" />',
      '<text x="159" y="52" fill="#56657b" font-size="11" font-family="Segoe UI, Arial">Centro B</text>',
      '<line x1="280" y1="50" x2="292" y2="50" stroke="#ef4444" stroke-width="2" stroke-dasharray="3 2" />',
      '<text x="300" y="52" fill="#ef4444" font-size="11" font-family="Segoe UI, Arial" font-weight="600">Umbral (70)</text>',
      '<rect x="420" y="44" width="12" height="2" fill="#e0f2fe" opacity="0.6" />',
      '<text x="438" y="52" fill="#0284c7" font-size="11" font-family="Segoe UI, Arial">Banda control (60-80)</text>',
      '</svg>'
    ].join(""));
  }

  function createBarChartSvg(series) {
    var width = 620;
    var height = 280;
    var padding = { top: 38, right: 20, bottom: 44, left: 42 };
    var plotWidth = width - padding.left - padding.right;
    var plotHeight = height - padding.top - padding.bottom;
    var values = [];

    series.forEach(function (item) {
      values.push(item.min, item.avg, item.max);
    });

    var maxValue = Math.max.apply(Math, values) + 10;

    function yPosition(value) {
      return padding.top + ((maxValue - value) * plotHeight) / maxValue;
    }

    function barHeight(value) {
      return height - padding.bottom - yPosition(value);
    }

    function xPosition(index) {
      return padding.left + (plotWidth * index) / series.length;
    }

    return createDataUri([
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + width + ' ' + height + '" preserveAspectRatio="none">',
      '<rect width="' + width + '" height="' + height + '" rx="20" fill="#fbfdff" />',
      '<text x="24" y="24" fill="#183153" font-size="14" font-family="Segoe UI, Arial" font-weight="700">Distribución Min / Promedio / Máx por mes</text>',
      series.map(function (item, index) {
        var base = xPosition(index);
        return [
          '<rect x="' + (base + 6).toFixed(1) + '" y="' + yPosition(item.min).toFixed(1) + '" width="10" height="' + barHeight(item.min).toFixed(1) + '" rx="4" fill="#93c5fd" />',
          '<rect x="' + (base + 20).toFixed(1) + '" y="' + yPosition(item.avg).toFixed(1) + '" width="10" height="' + barHeight(item.avg).toFixed(1) + '" rx="4" fill="#2563eb" />',
          '<rect x="' + (base + 34).toFixed(1) + '" y="' + yPosition(item.max).toFixed(1) + '" width="10" height="' + barHeight(item.max).toFixed(1) + '" rx="4" fill="#34d399" />',
          '<text x="' + (base + 20).toFixed(1) + '" y="' + (height - 16) + '" fill="#5d6b82" font-size="12" font-family="Segoe UI, Arial" text-anchor="middle">' + item.month + '</text>'
        ].join("");
      }).join(""),
      '<rect x="24" y="34" width="10" height="10" rx="2" fill="#93c5fd" />',
      '<text x="40" y="43" fill="#56657b" font-size="12" font-family="Segoe UI, Arial">Mínimo</text>',
      '<rect x="96" y="34" width="10" height="10" rx="2" fill="#2563eb" />',
      '<text x="112" y="43" fill="#56657b" font-size="12" font-family="Segoe UI, Arial">Promedio</text>',
      '<rect x="182" y="34" width="10" height="10" rx="2" fill="#34d399" />',
      '<text x="198" y="43" fill="#56657b" font-size="12" font-family="Segoe UI, Arial">Máximo</text>',
      '</svg>'
    ].join(""));
  }

  function createHeatmapSvg(heatmapRows) {
    var width = 760;
    var height = 280;
    var left = 118;
    var top = 60;
    var cellWidth = 84;
    var cellHeight = 38;
    var colors = {
      success: "#22c55e",
      warning: "#f59e0b",
      error: "#ef4444"
    };
    var columns = [];

    heatmapRows.forEach(function (row) {
      row.equipment.forEach(function (item) {
        if (columns.indexOf(item.name) === -1) {
          columns.push(item.name);
        }
      });
    });

    if (!columns.length) {
      columns = ["Sin datos"];
    }

    return createDataUri([
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + width + ' ' + height + '" preserveAspectRatio="none">',
      '<rect width="' + width + '" height="' + height + '" rx="20" fill="#fbfdff" />',
      '<text x="24" y="24" fill="#183153" font-size="14" font-family="Segoe UI, Arial" font-weight="700">Heatmap: Centro vs Equipo (Estado)</text>',
      columns.map(function (column, index) {
        return '<text x="' + (left + index * cellWidth + 14) + '" y="' + (top - 18) + '" fill="#5d6b82" font-size="11" font-family="Segoe UI, Arial" text-anchor="middle">' + escapeXml(column) + '</text>';
      }).join(""),
      heatmapRows.map(function (row, rowIndex) {
        var rowY = top + rowIndex * cellHeight;
        var circles = columns.map(function (columnName, columnIndex) {
          var item = row.equipment.filter(function (equipmentItem) {
            return equipmentItem.name === columnName;
          })[0];
          if (!item) {
            return '';
          }
          var cx = left + columnIndex * cellWidth + 14;
          var cy = rowY + 12;
          return '<circle cx="' + cx + '" cy="' + cy + '" r="8" fill="' + colors[item.state] + '" />';
        }).join("");

        return '<text x="24" y="' + (rowY + 16) + '" fill="#3b4a63" font-size="12" font-family="Segoe UI, Arial" font-weight="600">' + escapeXml(row.center) + '</text>' + circles;
      }).join(""),
      '</svg>'
    ].join(""));
  }

  function buildFilterSummary(filters) {
    return [
      "Centro: " + filters.center,
      "Planta: " + filters.plant,
      "Equipo: " + filters.equipment,
      "Variable: " + filters.variable
    ].join(" · ");
  }

  function updateModel(oModel) {
    var filters = oModel.getProperty("/filters");
    var centerNames = getCenterNames(filters.center);
    var endDate = filters.to ? parseDateString(filters.to) : new Date();
    var traceability = buildTraceability(centerNames, filters.variable, filters.equipment, filters.from ? parseDateString(filters.from) : null, filters.to ? parseDateString(filters.to) : null);
    var trendSeries = buildTrendSeries(centerNames, endDate);
    var distributionSeries = buildDistributionSeries(centerNames, endDate);
    var heatmapRows = buildHeatmapRows(centerNames, filters.equipment, traceability);
    var kpis = calculateKpisFromRows(traceability);

    oModel.setProperty("/kpis/otMonth", Math.round(kpis.otMonth));
    oModel.setProperty("/kpis/outOfRange", Number(kpis.outOfRange.toFixed(1)));
    oModel.setProperty("/kpis/monthlyAverage", Number(kpis.monthlyAverage.toFixed(1)));
    oModel.setProperty("/kpis/criticalEquipments", Math.round(kpis.criticalEquipments));
    oModel.setProperty("/filterSummary", buildFilterSummary(filters));
    oModel.setProperty("/lastUpdated", "Última actualización: " + new Date().toLocaleDateString("es-ES") + " " + new Date().toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" }));
    oModel.setProperty("/trendChart", createLineChartSvg(trendSeries));
    oModel.setProperty("/distributionChart", createBarChartSvg(distributionSeries));
    oModel.setProperty("/heatmapChart", createHeatmapSvg(heatmapRows));
    oModel.setProperty("/traceability", traceability);
  }

  function createInitialModel() {
    return new JSONModel({
      filters: {
        center: "Todos",
        plant: "Todas",
        equipment: "Todos",
        variable: "Presion",
        from: "01/01/2024",
        to: "31/12/2024"
      },
      kpis: {
        otMonth: 0,
        outOfRange: 0,
        monthlyAverage: 0,
        criticalEquipments: 0
      },
      filterSummary: "",
      lastUpdated: "",
      trendChart: "",
      distributionChart: "",
      heatmapChart: "",
      traceability: []
    });
  }

  return Controller.extend("com.demo.fioriapp.controller.App", {
    onInit: function () {
      var oDashboardModel = createInitialModel();

      this.getView().setModel(oDashboardModel, "dashboard");
      updateModel(oDashboardModel);
    },

    onFilterChange: function () {
      updateModel(this.getView().getModel("dashboard"));
    },

    onSelectCenterChange: function () {
      updateModel(this.getView().getModel("dashboard"));
    },

    onBuscarButtonPress: function () {
      updateModel(this.getView().getModel("dashboard"));
    },

    onLimpiarButtonPress: function () {
      var oModel = this.getView().getModel("dashboard");

      oModel.setProperty("/filters/center", "Todos");
      oModel.setProperty("/filters/plant", "Todas");
      oModel.setProperty("/filters/equipment", "Todos");
      oModel.setProperty("/filters/variable", "Presion");
      oModel.setProperty("/filters/from", "01/01/2024");
      oModel.setProperty("/filters/to", "31/12/2024");
      updateModel(oModel);
    }
  });
});
