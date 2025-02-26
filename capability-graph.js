const { Graph, register, ExtensionCategory, CubicHorizontal, BaseBehavior, GraphEvent, Label, Rect, HTML, Badge, CommonEvent, CanvasEvent, NodeEvent } = G6;

//#region edges
// animation for connecting wires
class AntLine extends CubicHorizontal {
    onCreate() {
        const shape = this.shapeMap.key;
        shape.animate([{ lineDashOffset: 20 }, { lineDashOffset: 0 }], {
            duration: 500,
            iterations: Infinity,
        });
    }
}
register(ExtensionCategory.EDGE, 'ant-line', AntLine);
//#endregion

//#region nodes
// /**
//  * Draw a chart node with different ui based on the zoom level.
//  */
// Register a custom node with an expandable/collapsible feature
class ExpandableNode extends Rect {
    render(attributes = this.parsedAttributes, container = this) {
        super.render(attributes, container);
        this.drawLinkText(attributes, container);
    }
    getLinkTextStyle(attributes){
        const [width, height] = this.getSize(attributes);
        return {
            size: [160, 80],
            fill: 'white',
            fillOpacity: 0,
            radius: 8,
            x: width/2,
            y: height/2,
            lineWidth: 4,
            icon: true,  
            iconFontFamily:'Material Icons',
            iconText:'\ue88e',
            iconFontSize:100,
            iconFill: '#2b2b2b',
            cursor: 'pointer',
        };        
    }
    drawLinkText(attributes, container) {
        const linkTextStyle = this.getLinkTextStyle(attributes);
        this.upsert('link', Rect, linkTextStyle, container);
    }
}
register(ExtensionCategory.NODE, 'expandableNode', ExpandableNode);
//#endregion

//#region behaviours
//#endregion

//#region data
// capabilities data
var data = {
    "nodes": [
        {
            "id": "stages1",
            "combo": "stages",
            "collapsed": "true",
            "data": {
                "title": "Existing/Site",
                "lead": "1h",
                "description": "lorem ipsum",
                "requirements": "cookies and milk",
                "tag": "stages",
                "url" : "https://i2c.com.au/",
            }
        },
        {
            "id": "stages2",
            "combo": "stages",
            "collapsed": "true",
            "data": {
                "title": "Research",
                "lead": "1h",
                "description": "lorem ipsum",
                "requirements": "cookies and milk",
                "tag": "stages",
                "url" : "https://i2c.com.au/",
            }
        },
        {
            "id": "stages3",
            "combo": "stages",
            "collapsed": "true",
            "data": {
                "title": "Vision",
                "lead": "1h",
                "description": "lorem ipsum",
                "requirements": "cookies and milk",
                "tag": "stages",
                "url" : "https://i2c.com.au/",
            }
        },
        {
            "id": "stages4",
            "combo": "stages",
            "collapsed": "true",
            "data": {
                "title": "Feasibility",
                "lead": "1h",
                "description": "lorem ipsum",
                "requirements": "cookies and milk",
                "tag": "stages",
                "url" : "https://i2c.com.au/",
            }
        },
        {
            "id": "stages5",
            "combo": "stages",
            "collapsed": "true",
            "data": {
                "title": "Concept Planning",
                "lead": "1h",
                "description": "lorem ipsum",
                "requirements": "cookies and milk",
                "tag": "stages",
                "url" : "https://i2c.com.au/",
            }
        },
        {
            "id": "stages6",
            "combo": "stages",
            "collapsed": "true",
            "data": {
                "title": "Project Review",
                "lead": "1h",
                "description": "lorem ipsum",
                "requirements": "cookies and milk",
                "tag": "stages",
                "url" : "https://i2c.com.au/",
            }
        },
        {
            "id": "stages7",
            "combo": "stages",
            "collapsed": "true",
            "data": {
                "title": "Concept Development",
                "lead": "1h",
                "description": "lorem ipsum",
                "requirements": "cookies and milk",
                "tag": "stages",
                "url" : "https://i2c.com.au/",
            }
        },
        {
            "id": "stages8",
            "combo": "stages",
            "collapsed": "true",
            "data": {
                "title": "Town Planning",
                "lead": "1h",
                "description": "lorem ipsum",
                "requirements": "cookies and milk",
                "tag": "stages",
                "url" : "https://i2c.com.au/",
            }
        },
        {
            "id": "stages9",
            "combo": "stages",
            "collapsed": "true",
            "data": {
                "title": "Design Development",
                "lead": "1h",
                "description": "lorem ipsum",
                "requirements": "cookies and milk",
                "tag": "stages",
                "url" : "https://i2c.com.au/",
            }
        },
        {
            "id": "stages10",
            "combo": "stages",
            "collapsed": "true",
            "data": {
                "title": "Technical Design",
                "lead": "1h",
                "description": "lorem ipsum",
                "requirements": "cookies and milk",
                "tag": "stages",
                "url" : "https://i2c.com.au/",
            }
        },
        {
            "id": "stages11",
            "combo": "stages",
            "collapsed": "true",
            "data": {
                "title": "Construction",
                "lead": "1h",
                "description": "lorem ipsum",
                "requirements": "cookies and milk",
                "tag": "stages",
                "url" : "https://i2c.com.au/",
            }
        },
        {
            "id": "prototyping1",
            "combo": "prototyping",
            "collapsed": "true",
            "data": {
                "title": "3D Printing",
                "lead": "TBC",
                "description": "3D printing, also known as additive manufacturing, is a manufacturing process that creates objects layer by layer based on a digital 3D model.",
                "requirements": "3D model any filetype",
                "tag": "prototyping",
                "url" : "https://i2c.com.au/",
            }
        },
        {
            "id": "prototyping2",
            "combo": "prototyping",
            "collapsed": "true",
            "data": {
                "title": "Virtual Reality",
                "lead": "1h",
                "description": "Virtual Reality (VR) is increasingly being integrated into the field of architecture, providing architects, designers, and clients with immersive experiences that enhance the design and visualisation process.",
                "requirements": "3D model, Enscape.",
                "tag": "prototyping",
                "url" : "https://i2c.com.au/",
            }
        },
        {
            "id": "parametric1",
            "combo": "parametric",
            "collapsed": "true",
            "data": {
                "title": "Facade",
                "lead": "Varies - min 4h",
                "description": "Parametric modelling is the use of parameters to define and manipulate the characteristics of architectural elements and forms within a digital environment. It involves creating a digital model that is driven by a set of parameters, which can be adjusted to explore different design possibilities and variations. ",
                "requirements": "Sketch and/or 3D model.",
                "tag": "parametric",
                "url" : "https://i2c.com.au/",
            }
        },
        {
            "id": "parametric2",
            "combo": "parametric",
            "collapsed": "true",
            "data": {
                "title": "Features",
                "lead": "Varies - min 4h",
                "description": "Parametric modelling is the use of parameters to define and manipulate the characteristics of architectural elements and forms within a digital environment. It involves creating a digital model that is driven by a set of parameters, which can be adjusted to explore different design possibilities and variations. ",
                "requirements": "Sketch and/or 3D model.",
                "tag": "parametric",
                "url" : "https://i2c.com.au/",
            }
        },
        {
            "id": "data1",
            "combo": "data",
            "collapsed": "true",
            "data": {
                "title": "Weather",
                "lead": "1h",
                "description": "Site weather data pertains to historical information about the climatic conditions of a specific location.",
                "requirements": "Address or co-ordinates of site",
                "tag": "data",
                "url" : "https://i2c.com.au/",
            }
        },
        {
            "id": "data2",
            "combo": "data",
            "collapsed": "true",
            "data": {
                "title": "Site Context",
                "lead": "1h 30m",
                "description": "Site Context tool extracts surrounding site data such as Lots Boundaries, 3D Building Geometry, Building Footprints, and Topography.",
                "requirements": "Address or co-ordinates of site",
                "tag": "data",
                "url" : "https://i2c.com.au/",
            }
        },
        {
            "id": "data3",
            "combo": "data",
            "collapsed": "true",
            "data": {
                "title": "Historical Data",
                "lead": "Varies as per availability",
                "description": "This includes data other than site geometry and weather such as Demographics, Population, Infrastructure, Employments, Statistics etc.",
                "requirements": "Address or co-ordinates of site",
                "tag": "data",
                "url" : "https://i2c.com.au/",
            }
        },
        {
            "id": "designAnalysis1",
            "combo": "designAnalysis",
            "collapsed": "true",
            "data": {
                "title": "Generative Design",
                "lead": "Varies",
                "description": "Generative design is a design exploration process. Designers input design goals into the generative design software and then the software explores all the possible permutations of a solution, quickly generating design alternatives. Using the results of generated design, the designer can then pick the most performative solution.",
                "requirements": "Varies as per project",
                "tag": "designAnalysis",
                "url" : "https://i2c.com.au/",
            }
        },
        {
            "id": "designAnalysis2",
            "combo": "designAnalysis",
            "collapsed": "true",
            "data": {
                "title": "Compliance Checks",
                "lead": "Varies",
                "description": "Automation can be applied to check models against building codes and regulations. This ensures that the design remains compliant with local building standards throughout the development process.",
                "requirements": "3D Model - LOD 300 to 400 ",
                "tag": "designAnalysis",
                "url" : "https://i2c.com.au/",
            }
        },
        {
            "id": "designAnalysis3",
            "combo": "designAnalysis",
            "collapsed": "true",
            "data": {
                "title": "Pedestrian Movement",
                "lead": "min 4h",
                "description": "Pedestrian movement analysis utilises agent-based modelling system to study and understand the ways in which people move through and interact with built environments. This analysis aims to inform the design of spaces that are not only aesthetically pleasing but also functional and responsive to the needs of pedestrians.",
                "requirements": "2D Plan, 3D Model.",
                "tag": "designAnalysis",
                "url" : "https://i2c.com.au/",
            }
        },
        {
            "id": "designAnalysis4",
            "combo": "designAnalysis",
            "collapsed": "true",
            "data": {
                "title": "View Analysis",
                "lead": "2h",
                "description": "View analysis involves assessing what can be seen from a particular vantage point and how the visual experience can be optimised for both inhabitants and passersby. View analysis considers factors such as line of sight, obstruction, and visual prominence to determine the effectiveness of a signage placement.",
                "requirements": "3D Model.",
                "tag": "designAnalysis",
                "url" : "https://i2c.com.au/",
            }
        },
        {
            "id": "designAnalysis5",
            "combo": "designAnalysis",
            "collapsed": "true",
            "data": {
                "title": "Signage Visibility",
                "lead": "min 6h",
                "description": "ignage visibility analysis using view analysis involves assessing and optimising the visibility of signage within a given environment. View analysis considers factors such as line of sight, obstruction, and visual prominence to determine the effectiveness of a signage placement.",
                "requirements": "3D Model",
                "tag": "designAnalysis",
                "url" : "https://i2c.com.au/",
            }
        },
        {
            "id": "designAnalysis6",
            "combo": "designAnalysis",
            "collapsed": "true",
            "data": {
                "title": "Facade Optimisation",
                "lead": "Varies as per project",
                "description": "Optimisation involves making strategic decisions to improve various aspects of the facade such as geometry rationalisation, environmental performance, design performance and detailing.",
                "requirements": "Sketch and/or 3D Model.",
                "tag": "designAnalysis",
                "url" : "https://i2c.com.au/",
            }
        },
        {
            "id": "sustainabilityAnalysis1",
            "combo": "sustainabilityAnalysis",
            "collapsed": "true",
            "data": {
                "title": "Shadow",
                "lead": "min 2h",
                "description": "A shadow study is a detailed analysis that examines the patterns, positions, and durations of shadows cast by structures or objects in a given environment. ",
                "requirements": "3D Model, Address or co-ordinates of the site",
                "tag": "sustainabilityAnalysis",
                "url" : "https://i2caus.sharepoint.com/sites/SustainableDesignKnowledgeBase/SitePages/Shadow-Analysis.aspx?csf=1&web=1&e=TjYeLM",
            }
        },
        {
            "id": "sustainabilityAnalysis2",
            "combo": "sustainabilityAnalysis",
            "collapsed": "true",
            "data": {
                "title": "Sun Hour",
                "lead": "min 2h",
                "description": "Sun hour analysis is a study that evaluates the duration of sunlight exposure at a specific location over a period, typically on a daily or annual basis.",
                "requirements": "3D Model, Address or co-ordinates of the site",
                "tag": "sustainabilityAnalysis",
                "url" : "https://i2caus.sharepoint.com/sites/SustainableDesignKnowledgeBase/SitePages/Sun-Hour-Analysis.aspx",
            }
        },
        {
            "id": "sustainabilityAnalysis3",
            "combo": "sustainabilityAnalysis",
            "collapsed": "true",
            "data": {
                "title": "Solar Radiation",
                "lead": "min 2h",
                "description": "Performing this analysis is to understand how much energy (measured in kilowatt hour -Kwh) is received by a surface that's exposed to direct sunlight. ",
                "requirements": "3D Model, Address or co-ordinates of the site",
                "tag": "sustainabilityAnalysis",
                "url" : "https://i2caus.sharepoint.com/sites/SustainableDesignKnowledgeBase/SitePages/Solar-Radiation-Analysis(1).aspx",
            }
        },
        {
            "id": "sustainabilityAnalysis4",
            "combo": "sustainabilityAnalysis",
            "collapsed": "true",
            "data": {
                "title": " Daylight Factor",
                "lead": "min 3h",
                "description": "The daylight factor (DF) is the measure of daylight quality in a room. It describes the ratio of outside illuminance over inside illuminance, expressed in per cent. The higher the DF, the more natural light is available in the room.",
                "requirements": "3D Model - Shoe box detail level.",
                "tag": "sustainabilityAnalysis",
                "url" : "https://i2caus.sharepoint.com/sites/SustainableDesignKnowledgeBase/SitePages/Daylight-Factor.aspx",
            }
        },
        {
            "id": "sustainabilityAnalysis5",
            "combo": "sustainabilityAnalysis",
            "collapsed": "true",
            "data": {
                "title": "Daylight Autonomy",
                "lead": "min 3h",
                "description": "Daylight autonomy is a metric used in architectural and lighting design to quantify the percentage of occupied hours during which a space receives sufficient natural daylight to meet specific illuminance levels without the need for artificial lighting. It provides a more dynamic and comprehensive assessment of daylighting conditions compared to static metrics like the daylight factor.",
                "requirements": "3D Model - Shoe box detail level.",
                "tag": "sustainabilityAnalysis",
                "url" : "https://i2caus.sharepoint.com/sites/SustainableDesignKnowledgeBase/SitePages/Daylight-Autonomy.aspx",
            }
        },
        {
            "id": "sustainabilityAnalysis6",
            "combo": "sustainabilityAnalysis",
            "collapsed": "true",
            "data": {
                "title": "Useful Daylight",
                "lead": "min 4h",
                "description": "Useful Daylight Illuminance (UDI) is a metric used in lighting design and architectural analysis to evaluate and quantify the amount and quality of daylight deemed useful for various visual tasks in a space during specific time periods.",
                "requirements": "3D Model - Shoe box detail level",
                "tag": "sustainabilityAnalysis",
                "url" : "https://i2caus.sharepoint.com/sites/SustainableDesignKnowledgeBase/SitePages/Useful-Daylight-Illuminance.aspx",
            }
        },
        {
            "id": "sustainabilityAnalysis7",
            "combo": "sustainabilityAnalysis",
            "collapsed": "true",
            "data": {
                "title": "Glare",
                "lead": "min 4h",
                "description": "A glare study or analysis involves the assessment of potential glare sources in and around a building. This process helps designers identify areas where glare may occur, analyze its impact, and implement strategies to mitigate its effects.",
                "requirements": "3D Model - Shoe box detail level",
                "tag": "sustainabilityAnalysis",
                "url" : "https://i2caus.sharepoint.com/sites/SustainableDesignKnowledgeBase/SitePages/Glare-Study.aspx",
            }
        },
        {
            "id": "sustainabilityAnalysis8",
            "combo": "sustainabilityAnalysis",
            "collapsed": "true",
            "data": {
                "title": "Thermal Comfort",
                "lead": "min 4h",
                "description": "Thermal comfort analysis involves assessing and optimising the conditions within a built environment to ensure that occupants experience comfort regarding the thermal environment. This analysis is crucial for designing spaces that are not only energy-efficient but also conducive to the well-being and satisfaction of occupants.",
                "requirements": "3D Model - Shoe box detail level",
                "tag": "sustainabilityAnalysis",
                "url" : "https://i2caus.sharepoint.com/sites/SustainableDesignKnowledgeBase/SitePages/Comfort-Analysis.aspx",
            }
        },
        {
            "id": "sustainabilityAnalysis9",
            "combo": "sustainabilityAnalysis",
            "collapsed": "true",
            "data": {
                "title": "Energy Use Intesity",
                "lead": "min 4h",
                "description": "Energy Use Intensity (EUI) is a metric used to quantify the energy efficiency of a building or facility. It represents the total energy consumption of a building.",
                "requirements": "3D Model - Shoe box detail level",
                "tag": "sustainabilityAnalysis",
                "url" : "https://i2caus.sharepoint.com/sites/SustainableDesignKnowledgeBase/SitePages/Energy%20Use%20Intensity.aspx",
            }
        },
        {
            "id": "sustainabilityAnalysis10",
            "combo": "sustainabilityAnalysis",
            "collapsed": "true",
            "data": {
                "title": "Embodied Carbon",
                "lead": "Varies",
                "description": "Embodied carbon calculation refers to the assessment of the total carbon emissions associated with the production, transportation, and installation of building materials and components over their life cycle. ",
                "requirements": "Varies as per project stage",
                "tag": "sustainabilityAnalysis",
                "url" : "https://i2caus.sharepoint.com/sites/SustainableDesignKnowledgeBase/SitePages/Embodied%20Carbon.aspx?csf=1&web=1&e=M50sTw",
            }
        },
        {
            "id": "sustainabilityAnalysis11",
            "combo": "sustainabilityAnalysis",
            "collapsed": "true",
            "data": {
                "title": "Wind Comfort",
                "lead": "min 12h",
                "description": "We utilise scientifically accredited tools for simulating windflow using a concept known as Computational Fluid Dynamics (CFD). With CFD software, we can digitally simulate the windflow at our project locations at an urban scale and derive the comfort levels.",
                "requirements": "3D Model - Solid boxes",
                "tag": "sustainabilityAnalysis",
                "url" : "https://i2caus.sharepoint.com/sites/SustainableDesignKnowledgeBase/SitePages/Wind-Analysis.aspx",
            }
        },
        {
            "id": "automation1",
            "combo": "automation",
            "collapsed": "true",
            "data": {
                "title": "Documentation",
                "lead": "Varies as per requirements",
                "description": "By automating various documentation processes we ensure drawings meet a high degree of quality while saving you valuable time. ",
                "requirements": "Varies as per project",
                "tag": "automation",
                "url" : "https://i2c.com.au/",
            }
        },
        {
            "id": "automation2",
            "combo": "automation",
            "collapsed": "true",
            "data": {
                "title": "BIM processes",
                "lead": "Varies as per requirements",
                "description": "Apart from the documentation aspect of the projects there are various BIM-related tasks that can be potentially automated.",
                "requirements": "Varies as per project",
                "tag": "automation",
                "url" : "https://i2c.com.au/",
            }
        }
    ],
    "edges": [
        {
            "id": "edge-site-3dprinting",
            "source": "stages1",
            "target": "prototyping1"
        },
        {
            "id": "edge-site-virturalReality",
            "source": "stages1",
            "target": "prototyping2"
        },
        {
            "id": "edge-site-siteContext",
            "source": "stages1",
            "target": "data2"
        },
        {
            "id": "edge-site-documentation",
            "source": "stages1",
            "target": "automation1"
        },
        {
            "id": "edge-research-weather",
            "source": "stages2",
            "target": "data1"
        },
        {
            "id": "edge-research-siteContext",
            "source": "stages2",
            "target": "data2"
        },
        {
            "id": "edge-research-historicalData",
            "source": "stages2",
            "target": "data3"
        },
        {
            "id": "edge-vision-virtualReality",
            "source": "stages3",
            "target": "prototyping2"
        },
        {
            "id": "edge-vision-embodiedCarbon",
            "source": "stages3",
            "target": "sustainabilityAnalysis10"
        },
        {
            "id": "edge-feasibility-3dprinting",
            "source": "stages4",
            "target": "prototyping1"
        },
        {
            "id": "edge-feasibility-virtualReality",
            "source": "stages4",
            "target": "prototyping2"
        },
        {
            "id": "edge-feasibility-generativeDesign",
            "source": "stages4",
            "target": "designAnalysis1"
        },
        {
            "id": "edge-feasibility-documentation",
            "source": "stages4",
            "target": "automation1"
        },
        {
            "id": "edge-conceptPlanning-3dprinting",
            "source": "stages5",
            "target": "prototyping1"
        },
        {
            "id": "edge-conceptPlanning-virtualReality",
            "source": "stages5",
            "target": "prototyping2"
        },
        {
            "id": "edge-conceptPlanning-generativeDesign",
            "source": "stages5",
            "target": "designAnalysis1"
        },
        {
            "id": "edge-conceptPlanning-viewAnalysis",
            "source": "stages5",
            "target": "designAnalysis4"
        },
        {
            "id": "edge-conceptPlanning-shadow",
            "source": "stages5",
            "target": "sustainabilityAnalysis1"
        },
        {
            "id": "edge-conceptPlanning-sunHour",
            "source": "stages5",
            "target": "sustainabilityAnalysis2"
        },
        {
            "id": "edge-conceptPlanning-enerygUseIntensity",
            "source": "stages5",
            "target": "sustainabilityAnalysis9"
        },
        {
            "id": "edge-conceptPlanning-embodiedCarbon",
            "source": "stages5",
            "target": "sustainabilityAnalysis10"
        },
        {
            "id": "edge-conceptPlanning-documentation",
            "source": "stages5",
            "target": "automation1"
        },
        {
            "id": "edge-projectReview-virtualReality",
            "source": "stages6",
            "target": "prototyping2"
        },
        {
            "id": "edge-projectReview-complianceChecks",
            "source": "stages6",
            "target": "designAnalysis2"
        },
        {
            "id": "edge-conceptDevelopment-3dpriting",
            "source": "stages7",
            "target": "prototyping1"
        },
        {
            "id": "edge-conceptDevelopment-virtualReality",
            "source": "stages7",
            "target": "prototyping2"
        },
        {
            "id": "edge-conceptDevelopment-facade",
            "source": "stages7",
            "target": "parametric1"
        },
        {
            "id": "edge-conceptDevelopment-features",
            "source": "stages7",
            "target": "parametric2"
        },
        {
            "id": "edge-conceptDevelopment-generativeDesign",
            "source": "stages7",
            "target": "designAnalysis1"
        },
        {
            "id": "edge-conceptDevelopment-complianceChecks",
            "source": "stages7",
            "target": "designAnalysis2"
        },
        {
            "id": "edge-conceptDevelopment-pedestrianMovement",
            "source": "stages7",
            "target": "designAnalysis3"
        },
        {
            "id": "edge-conceptDevelopment-viewAnalysis",
            "source": "stages7",
            "target": "designAnalysis4"
        },
        {
            "id": "edge-conceptDevelopment-shadow",
            "source": "stages7",
            "target": "sustainabilityAnalysis1"
        },
        {
            "id": "edge-conceptDevelopment-sunHour",
            "source": "stages7",
            "target": "sustainabilityAnalysis2"
        },
        {
            "id": "edge-conceptDevelopment-solarRadiation",
            "source": "stages7",
            "target": "sustainabilityAnalysis3"
        },
        {
            "id": "edge-conceptDevelopment-daylightFactor",
            "source": "stages7",
            "target": "sustainabilityAnalysis4"
        },
        {
            "id": "edge-conceptDevelopment-energyUseIntensity",
            "source": "stages7",
            "target": "sustainabilityAnalysis9"
        },
        {
            "id": "edge-conceptDevelopment-embodiedCarbon",
            "source": "stages7",
            "target": "sustainabilityAnalysis10"
        },
        {
            "id": "edge-conceptDevelopment-windComfort",
            "source": "stages7",
            "target": "sustainabilityAnalysis11"
        },
        {
            "id": "edge-townPlanning-3dprinting",
            "source": "stages8",
            "target": "prototyping1"
        },
        {
            "id": "edge-townPlanning-virtualReality",
            "source": "stages8",
            "target": "prototyping2"
        },
        {
            "id": "edge-townPlanning-facade",
            "source": "stages8",
            "target": "parametric2"
        },
        {
            "id": "edge-townPlanning-features",
            "source": "stages8",
            "target": "parametric2"
        },
        {
            "id": "edge-townPlanning-generativeDesign",
            "source": "stages8",
            "target": "designAnalysis1"
        },
        {
            "id": "edge-townPlanning-complianceChecks",
            "source": "stages8",
            "target": "designAnalysis2"
        },
        {
            "id": "edge-townPlanning-pedestrianMovement",
            "source": "stages8",
            "target": "designAnalysis3"
        },
        {
            "id": "edge-townPlanning-viewAnalysis",
            "source": "stages8",
            "target": "designAnalysis4"
        },
        {
            "id": "edge-townPlanning-signageVisibility",
            "source": "stages8",
            "target": "designAnalysis5"
        },
        {
            "id": "edge-townPlanning-facadeOptimisation",
            "source": "stages8",
            "target": "designAnalysis6"
        },
        {
            "id": "edge-townPlanning-shadow",
            "source": "stages8",
            "target": "sustainabilityAnalysis1"
        },
        {
            "id": "edge-townPlanning-sunHour",
            "source": "stages8",
            "target": "sustainabilityAnalysis2"
        },
        {
            "id": "edge-townPlanning-solarRadiation",
            "source": "stages8",
            "target": "sustainabilityAnalysis3"
        },
        {
            "id": "edge-townPlanning-daylightFactor",
            "source": "stages8",
            "target": "sustainabilityAnalysis4"
        },
        {
            "id": "edge-townPlanning-daylightAutonomy",
            "source": "stages8",
            "target": "sustainabilityAnalysis5"
        },
        {
            "id": "edge-townPlanning-usefulDaylight",
            "source": "stages8",
            "target": "sustainabilityAnalysis6"
        },
        {
            "id": "edge-townPlanning-glare",
            "source": "stages8",
            "target": "sustainabilityAnalysis7"
        },
        {
            "id": "edge-townPlanning-thermalComfort",
            "source": "stages8",
            "target": "sustainabilityAnalysis8"
        },
        {
            "id": "edge-townPlanning-energyUseIntensity",
            "source": "stages8",
            "target": "sustainabilityAnalysis9"
        },
        {
            "id": "edge-townPlanning-embodiedCarbon",
            "source": "stages8",
            "target": "sustainabilityAnalysis10"
        },
        {
            "id": "edge-townPlanning-windComfort",
            "source": "stages8",
            "target": "sustainabilityAnalysis11"
        },
        {
            "id": "edge-townPlanning-documentation",
            "source": "stages9",
            "target": "automation1"
        },
        {
            "id": "edge-designdevelopment-3dprinting",
            "source": "stages9",
            "target": "prototyping1"
        },
        {
            "id": "edge-designdevelopment-virtualReality",
            "source": "stages9",
            "target": "prototyping2"
        },
        {
            "id": "edge-designdevelopment-facade",
            "source": "stages9",
            "target": "parametric2"
        },
        {
            "id": "edge-designdevelopment-features",
            "source": "stages9",
            "target": "parametric2"
        },
        {
            "id": "edge-designdevelopment-complianceChecks",
            "source": "stages9",
            "target": "designAnalysis2"
        },
        {
            "id": "edge-designdevelopment-viewAnalysis",
            "source": "stages9",
            "target": "designAnalysis4"
        },
        {
            "id": "edge-designdevelopment-signageVisibility",
            "source": "stages9",
            "target": "designAnalysis5"
        },
        {
            "id": "edge-designdevelopment-facadeOptimisation",
            "source": "stages9",
            "target": "designAnalysis6"
        },
        {
            "id": "edge-designdevelopment-solarRadiation",
            "source": "stages9",
            "target": "sustainabilityAnalysis3"
        },
        {
            "id": "edge-designdevelopment-daylightFactor",
            "source": "stages9",
            "target": "sustainabilityAnalysis4"
        },
        {
            "id": "edge-designdevelopment-daylightAutonomy",
            "source": "stages9",
            "target": "sustainabilityAnalysis5"
        },
        {
            "id": "edge-designdevelopment-usefulDaylight",
            "source": "stages9",
            "target": "sustainabilityAnalysis6"
        },
        {
            "id": "edge-designdevelopment-glare",
            "source": "stages9",
            "target": "sustainabilityAnalysis7"
        },
        {
            "id": "edge-designdevelopment-thermalComfort",
            "source": "stages9",
            "target": "sustainabilityAnalysis8"
        },
        {
            "id": "edge-designdevelopment-energyUseIntensity",
            "source": "stages9",
            "target": "sustainabilityAnalysis9"
        },
        {
            "id": "edge-designdevelopment-embodiedCarbon",
            "source": "stages9",
            "target": "sustainabilityAnalysis10"
        },
        {
            "id": "edge-designdevelopment-documentation",
            "source": "stages9",
            "target": "automation1"
        },
        {
            "id": "edge-designdevelopment-bimProcesses",
            "source": "stages9",
            "target": "automation2"
        },
        {
            "id": "edge-technicalDesign-3dprinting",
            "source": "stages10",
            "target": "prototyping1"
        },
        {
            "id": "edge-technicalDesign-facadeOptimisation",
            "source": "stages10",
            "target": "designAnalysis6"
        },
        {
            "id": "edge-technicalDesign-glare",
            "source": "stages10",
            "target": "sustainabilityAnalysis7"
        },
        {
            "id": "edge-technicalDesign-documentation",
            "source": "stages10",
            "target": "automation1"
        },
        {
            "id": "edge-technicalDesign-bimProcesses",
            "source": "stages10",
            "target": "automation2"
        },
        {
            "id": "edge-construction-virtualReality",
            "source": "stages11",
            "target": "automation2"
        },
        {
            "id": "edge-construction-bimProcesses",
            "source": "stages11",
            "target": "automation2"
        }
    ],
    "combos": [
        {
            "id": "stages",
            "data": {
                "title": "Stages"
            }
        },
        {
            "id": "prototyping",
            "style": {
                "type": "rect"
            },
            "data": {
                "title": "Prototyping"
            }
        },
        {
            "id": "parametric",
            "style": {
                "type": "rect"
            },
            "data": {
                "title": "Parametric Modelling"
            }
        },
        {
            "id": "data",
            "style": {
                "type": "rect"
            },
            "data": {
                "title": "Data"
            }
        },
        {
            "id": "designAnalysis",
            "style": {
                "type": "rect"
            },
            "data": {
                "title": "Design Analysis"
            }
        },
        {
            "id": "sustainabilityAnalysis",
            "style": {
                "type": "rect"
            },
            "data": {
                "title": "Sustainability Analysis"
            }
        },
        {
            "id": "automation",
            "style": {
                "type": "rect"
            },
            "data": {
                "title": "Automation"
            }
        }
    ]
}
//#endregion

//#region styling
const CAPABILITY_COLOUR_MAP = {
    stages: '#343A40',
    prototyping: '#6a00f4',
    parametric: '#7952B3',
    data: '#a100f2',
    designAnalysis: '#323edb',
    sustainabilityAnalysis: '#db00b6',
    automation: '#f20089',
}
const fontSize = 68;
const rectWidth = 800;
const rectHeight = 200;
const rectStyle = {
    size: [rectWidth, rectHeight],
    radius: 20,
    fill: (d) => CAPABILITY_COLOUR_MAP[d.data.tag],
    fillOpacity: 1,
    label: true,
    labelText: (d) => d.data.title,
    labelFontSize: fontSize,
    labelOffsetY: rectHeight/6,
    labelPlacement: 'center',
    labelFill: '#fff',
    labelFontWeight: 'bold',
    labelBackground: false,
    labelPadding: 16,
    ports: [{ placement: 'left' }, { placement: 'right' }],
    labelWordWrap: true,
    labelMaxWidth: '90%',
    labelMaxLines: 2,
}
const comboStyle = {
    radius: 40,
    label: true,
    labelText: (d) => d.data.title,
    labelFontSize: fontSize,
    labelFill: '#fff',
    labelPlacement: (d) => d.id === 'stages' ? 'left-top' : 'right-top',
    labelOffsetX: (d) => d.id === 'stages' ? -60 : 60,
    labelOffsetY: 104,
    labelBackground: true,
    labelBackgroundFill: '#000',
    labelPadding: 24,
    labelBackgroundRadius: 40,
    lineDash: 40,
    lineWidth: 10,
    padding: 24,
    fill: (d) => CAPABILITY_COLOUR_MAP[d.id],
    fillOpacity:0.1,
}
//#endregion


//#region graph
// draw graph
const graph = new Graph({
    container: 'mydiagramcontainer',
    autoFit: 'view',
    data,
    node: {
        type: (d) => d.data.tag === 'stages' ? 'rect':'expandableNode',
        style: rectStyle,
        state:{
            selected:{
                labelFontSize: fontSize,
                labelOffsetY: rectHeight/6,
                labelPlacement: 'center',
                labelFill: '#fff',
                labelFontWeight: 'bold',
                labelBackground: false,
                labelPadding: 16,
                ports: [{ placement: 'left' }, { placement: 'right' }],
                labelWordWrap: true,
                labelMaxWidth: '90%',
                labelMaxLines: 2,
                haloLineWidth: 80,
                haloStroke:'#f59002',
            },
        }
    },
    edge: {
        type: 'ant-line',
        style: {
            lineDash: [20, 20],
            lineWidth: 3,
        },
    },
    combo: {
        type: 'rect',
        style: comboStyle,
        state: {
            inactive: {
                fillOpacity: 0.3,
            },
        },
    },
    layout: {
        type: 'antv-dagre',
        rankdir: 'LR',
        ranker: 'network-simplex',
        ranksep: 650,
        nodesep: 30,
        sortByCombo: true,
    },
    behaviors: [
        'drag-canvas',
        'zoom-canvas',
        'optimize-viewport-transform',
    ],
    plugins: [
        {
          type: 'tooltip',
          trigger: 'click',
          getContent: (e, items) => {
            if(e.targetType !== 'node')return;
            if(items[0].data.tag === 'stages')return;
            let item = items[0];
            let nodeColour = CAPABILITY_COLOUR_MAP[item.data.tag];

            // Create tooltip container
            const tooltipDiv = document.createElement('div');
            tooltipDiv.style.padding = '12px';
            tooltipDiv.style.background = nodeColour;
            tooltipDiv.style.color = '#fff';
            tooltipDiv.style.borderRadius = '5px';
            tooltipDiv.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)';
            tooltipDiv.style.fontFamily = 'DIN, sans-serif';
            tooltipDiv.style.maxWidth = '300px';
            tooltipDiv.style.pointerEvents = 'all';

            // Add item title
            const itemTitle = document.createElement('h2');
            itemTitleColour = CAPABILITY_COLOUR_MAP[item.data.tag];
            itemTitle.innerText = item.data.title;
            itemTitle.style.color = 'white';
            itemTitle.style.fontFamily = 'DIN, sans-serif';
            itemTitle.style.fontWeight = 800;
            itemTitle.style.fontStyle = 'normal';
            itemTitle.style.fontSize = '40px';
            itemTitle.style.textShadow = `1px 1px #343A40, 2px 2px #343A40, 3px 3px #343A40, 4px 4px #343A40, 5px 5px #343A40, 6px 6px #343A40, 7px 7px #343A40`;
            itemTitle.style.lineHeight = '40px';
            itemTitle.style.margin = '5px 0';
            tooltipDiv.appendChild(itemTitle);

            // Add details with styling
            const details = [
                { title: "Lead Time:", value: item.data.lead },
                { title: "Requirements:", value: item.data.requirements },
                { title: "Description:", value: item.data.description }
            ];

            details.forEach(({ title, value }) => {
                // Create title element
                const titleElement = document.createElement('span'); // Use <span> instead of <p>
                titleElement.innerText = title;
                titleElement.style.color = '#FFDD44'; 
                titleElement.style.fontSize = '14px';
                titleElement.style.fontWeight = 'bold';
                titleElement.style.textDecoration = 'underline';
                titleElement.style.marginRight = '5px'; 
                // titleElement.style.lineHeight = '1em';

                // Create value element
                const valueElement = document.createElement('span');
                valueElement.innerText = value;
                valueElement.style.fontSize = '14px';
                valueElement.style.color = 'white';

                // Wrap both elements in a single line
                const lineContainer = document.createElement('p');
                lineContainer.appendChild(titleElement);
                lineContainer.appendChild(valueElement);

                tooltipDiv.appendChild(lineContainer);
            });

            //link element to tool page
            linkElement = document.createElement('a');
            linkElement.href = item.data.url;
            linkElement.innerText = 'Click to view more...';
            linkElement.style.color = '#FFDD44';
            linkElement.style.textDecoration = 'underline';
            linkElement.style.cursor = 'pointer';
            linkElement.target = '_blank'; // Open in new tab
            tooltipDiv.appendChild(linkElement);

            return tooltipDiv;
          },
        },
      ],
    animation: true,
});
graph.render();
//#endregion

//#region event listeners
// canvas click event to restore node and group states
graph.on(CanvasEvent.CLICK, () => {
    const nodes = graph.getNodeData().map((node) => node.id);
    const edges = graph.getEdgeData().map((edge) => edge.id);
    graph.updateNodeData(nodes.map((id) => ({ id, states: []})));
    graph.updateEdgeData(edges.map((id) => ({ id, states: []})));
    graph.draw();
});

// node event to open url from the info icon on the bottom right of capability/tool nodes
graph.on(NodeEvent.CLICK, (event) => {
    const { target } = event;
    const nodeData = graph.getNodeData(target.id);
    if (target.className === 'link') {
        const parentNodeData = graph.getNodeData(target.parentNode.id).data;
        const url =parentNodeData.url;
        window.open(url);
    }
    if(target.type === 'node')
    {
        const neighborNodesData = graph.getNeighborNodesData(nodeData.id);
        const neighborIds = new Set(neighborNodesData.map(neighbor => neighbor.id));
        const relatedEdgesData = graph.getRelatedEdgesData(nodeData.id, 'both');
        const relatedEdgesIds = new Set(relatedEdgesData.map(edge => edge.id));
        if(nodeData.data.tag === 'stages'){
            selectNodeEdgeAndNeighbor(nodeData.id, neighborIds, relatedEdgesIds);
        } 
        else if(!nodeData.states.includes('selected')) {
            selectNodeEdgeAndNeighbor(nodeData.id, neighborIds, relatedEdgesIds);
        }
    }
});

function selectNodeEdgeAndNeighbor(nodeId, neighborIds, relatedEdgesIds){
    graph.getNodeData().forEach(node => {
        let stateToSet = neighborIds.has(node.id) ? 'selected' : 'inactive';
        graph.setElementState(node.id, stateToSet, true);
    });
    graph.getEdgeData().forEach(edge => {
        let stateToSet = relatedEdgesIds.has(edge.id) ? 'selected' : 'inactive';
        graph.setElementState(edge.id, stateToSet, true);
    });
    graph.setElementState(nodeId, 'selected', true);
}
//#endregion