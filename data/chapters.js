/**
 * Chapter Data for Supersonic Intakes Book
 * =========================================
 * 
 * INSTRUCTIONS:
 * 1. Edit the 'abstract' field for each chapter
 * 2. Replace "ADD YOUR ABSTRACT HERE..." with your actual abstract text
 * 3. Abstracts will appear when users click on chapter titles
 */

const chaptersData = [
    {
        number: "01",
        title: "Introduction to Supersonic Intakes",
        abstract: "This chapter presents a broad survey of supersonic intake design and optimization, focusing on their crucial role in high-speed aircraft and missiles. It begins by explaining that the primary function of supersonic intakes is to deliver the required air mass flow to the engine while minimizing losses. The text introduces key performance metrics, including total pressure recovery (TPR) and mass flow ratio (MFR), and discusses how these are affected by various flight conditions. The chapter explores the design requirements for supersonic intakes, categorizing them into performance, efficiency, cost, safety, and stealth considerations. It highlights the inherent conflicts between these requirements, such as the trade-off between efficiency and safety, and discusses the compromises necessary in practical designs. The chapter includes a discussion on different intake types, including external, internal, and mixed compression intakes, explaining their characteristics and operating principles. It covers various intake locations (nose, side-mounted, under-fuselage, dorsal) and their respective advantages and challenges. The text also discusses the optimal number of ramps or spikes for different Mach number ranges and explores the concept of diverterless supersonic intakes (DSI). An important phenomenon addressed is the intake starting problem in mixed and internal compression intakes, including the Kantrowitz-Donaldson criterion and methods to overcome starting limitations. Throughout the chapter, examples of real-world aircraft intakes are presented to illustrate practical applications of the concepts discussed. The intake characteristic curve, a key tool for understanding intake performance, is explained in detail, including its variation with flight conditions."
    },
    {
        number: "02",
        title: "Fundamentals of Compressible Flow",
        abstract: "This chapter presents the traditional methodology for the analytical design of supersonic intakes, focusing on maximizing total pressure recovery (TPR) using the Oswatitsch criterion. Three key algorithms are presented for optimizing external and mixed compression intake designs: determining optimal ramp angles, calculating ramp lengths, and establishing minimum throat area for mixed compression intakes. The Oswatitsch criterion, which states that maximum TPR is achieved when all shocks are of equal strength, forms the theoretical foundation of the optimization process. The application of these algorithms is demonstrated through two detailed examples: a two-ramp external compression intake and a two-ramp mixed compression intake, illustrating the differences in geometry, flow properties, and performance between the two designs."
    },
    {
        number: "03",
        title: "Intake Performance Parameters",
        abstract: "This chapter examines the conceptual design of supersonic intakes, focusing on external and mixed compression configurations for ramp intake. The analysis compares five intake examples: two external compression intakes (E2 and E3), two mixed compression intakes (M1 and M2), and a mixed compression intake with an angled cowl (M2A), all optimized for a freestream Mach number of 2.5 at a cruising altitude of 11 km. The study applies the Oswatitsch criterion for optimal shock strength distribution to determine the most efficient shock configurations.  Key design factors evaluated include total pressure recovery, ramp length, throat height, ramp height, and cowl angle. The analysis reveals that E3 and M2A achieve the highest total pressure recovery, but present challenges in terms of weight and intake dimensions. The chapter explores the trade-offs between performance, drag, and weight across the different designs, and briefly introduces the concept of optimal conical shocks for annular intakes, highlighting key differences between planar and conical shock systems in supersonic intake design.  "
    },
    {
        number: "04",
        title: "CFD Methods for Intake Analysis",
        abstract: "This chapter presents a couple of reduced-order modeling approaches for efficiently analyzing complex supersonic and hypersonic flow fields, with a focus on air-breathing propulsion systems. This chapter explores two prominent lower-order modeling techniques for supersonic intake design and analysis: the Method of Characteristics (MOC), and the Riemann wave interaction method developed by Dalle et al. (https://doi.org/10.2514/1.46521). These techniques offer a rapid and efficient alternative to high-fidelity Computational Fluid Dynamics (CFD) simulations, enabling designers to explore a wide range of parameters and identify promising configurations during the early design stages. The MOC relies on characteristic lines along which flow properties remain constant, while the Riemann wave interaction method builds upon the MOC by introducing a unified treatment of wave interactions through the solution of local Riemann problems. This approach incorporates real gas effects, variable specific heats, and adaptive mesh refinement to capture complex flow features while minimizing computational costs. This chapter aims to provide readers with a fundamental understanding of these techniques and their application in supersonic intake design, empowering designers to rapidly explore the design space and optimize intake performance."
    },
    {
        number: "05",
        title: "Optimization Theory & Methods",
        abstract: "Computational Fluid Dynamics (CFD) has become a key tool in the design and analysis of supersonic intakes, enabling engineers to predict flow behavior within these geometries. This chapter explains the governing equations for CFD simulations of supersonic intakes, including the compressible Favre-Averaged Navier-Stokes (FANS) equations and turbulence models. It covers the discretization of the computational domain into a mesh of finite volumes or elements, and discusses the selection of CFD solvers and numerical schemes to capture flow physics such as shock waves and flow separation. The chapter emphasizes verification methods and grid convergence studies to ensure accuracy and reliability of numerical simulations. Through CFD, designers can optimize intake geometry, minimize pressure drag, and enhance total pressure recovery. The chapter details the procedure of using a black-box optimizer with a CFD solver to determine optimal geometry."
    },
    {
        number: "06",
        title: "Kriging/MOGA Framework",
        abstract: "This chapter extends the theoretical E3 intake design presented in Chapter 3 by evaluating its performance using numerical methods and refining key design elements of the supersonic diffuser duct. We focus on four critical design features: cowl lip location, cowl lip thickness, cowl lip internal wedge angle, and throat shape. Through detailed examination of these components, we aim to achieve supersonic intake performance that closely aligns with theoretical expectations. We will also determine the viable range and any threshold limits for these design parameters, beyond which further changes provide diminishing benefits. This analysis serves as a foundation for future optimization efforts. By addressing these design parameters independently in this pre-optimization phase, we prepare for a more focused and efficient optimization process. This approach will reduce the number of variables in future optimization loops, allowing subsequent efforts to concentrate on the most critical aspects of supersonic diffuser duct design."
    },
    {
        number: "07",
        title: "Supersonic Diffuser Optimization",
        abstract: "This chapter presents an optimization methodology for the efficient design of supersonic intakes, focusing on triple-ramp external compression geometry. The framework combines computational fluid dynamics simulations, surrogate modeling, and multi-objective optimization to address the challenges of optimizing the supersonic intake design. Built on Axiomatic Design Theory, this approach systematically maps functional requirements to design parameters, providing a robust framework for optimization. The methodology begins with Latin Hypercube Sampling to explore the design parameter space thoroughly. This initial exploration enables evaluation of diverse intake configurations through high-fidelity CFD simulations, measuring critical performance metrics including total pressure recovery and pressure drag. To reduce computational demands, a Kriging surrogate model approximates these objective functions across the design space. The optimization then proceeds using a Multi-Objective Genetic Algorithm (MOGA) to identify Pareto-optimal designs that balance competing performance goals. An adaptive sampling strategy progressively refines the surrogate model, improving accuracy and driving convergence toward optimal configurations. When applied to triple-ramp intake geometry, this methodology proves highly effective, successfully minimizing pressure drag while maintaining total pressure recovery near baseline levels. The result is a systematic and practical approach to designing high-performance supersonic intakes that effectively manages complex design trade-offs."
    },
    {
        number: "08",
        title: "Three-Dimensional Intakes",
        abstract: "This chapter examines the transformation of supersonic intake analysis from two-dimensional to three-dimensional configurations, with emphasis on rectangular intakes. The chapter details how structural components such as side plates and pylons affect the flow field. Using computational fluid dynamics, the analysis compares two-dimensional and three-dimensional results, revealing differences in shock structure and performance metrics including total pressure recovery and mass flow rates. The study explores intake behavior at off-design conditions, examining performance variations at Mach numbers from 2.0 to 2.8 and angles of attack from -2 to 5 degrees. The characteristic curves demonstrate how shock patterns, pressure recovery, and mass flow rates change under these conditions."
    },
    {
        number: "09",
        title: "Conical Intakes",
        abstract: "This chapter examines the design and optimization principles of conical supersonic intakes, focusing on biconic configurations. The analysis covers the fundamental differences between planar and conical shock systems, geometric parameters affecting intake performance, and the role of viscous effects in flow behavior. The discussion includes computational methods for determining optimal cone angles and the impact of shock-boundary layer interactions on Total Pressure Recovery (TPR). Design considerations extend to cowl lip positioning along capture streamlines, implementation of conical flares for performance enhancement, and optimization of cowl geometry using ogive profiles. The chapter demonstrates how modern computational analysis provides insights into flow phenomena that influence intake performance beyond traditional design methodologies."
    },
    {
        number: "A",
        title: "ROAM Code",
        abstract: "The ROAM method is implemented in MATLAB as a marching algorithm that solves the flow field sequentially from left to right, beginning with an initial data line where flow properties are known or prescribed. This appendix provides the complete MATLAB code implementation of the procedure explained in Chapter 4, enabling readers to directly apply the method to their own flow problems. The complete source code is available on GitHub.",
        isAppendix: true,
        hasGitHub: true
    },
    {
        number: "B",
        title: "Boundary Layer Value Corrections",
        abstract: "The development of boundary layers along supersonic intake surfaces presents a significant aerodynamic challenge that directly influences the external compression shock structure.  When high-speed air flows along intake surfaces, it does not simply follow the geometric contours we design on paper. Instead, it creates a thin layer of affected flow -- the boundary layer -- that effectively reshapes the path air takes through the intake. This appendix explores how we account for these boundary layer effects through what is called the Boundary Layer Value Correction (BLVC).",
        isAppendix: true,
        hasPage: true,
        pageUrl: "pages/boundary-layer.html"
    },
    {
        number: "C",
        title: "Thrust & Drag Computation",
        abstract: "The objective of this appendix is to present a systematic analysis of the thrust-drag bookkeeping in case of an air-breathing propulsion vehicle and to develop the methodology necessary for calculating these forces. The methodology developed in this appendix using control volume approach for the aerodynamic analysis is based on the work done by Cross (Cross, P. G., “Force and Moment Accounting Procedure for Vehicles With Air-Breathing Propulsion Systems,” NAWCWD TM 8907, NAVAL AIR WARFARE CENTER WEAPONS DIVISION, China Lake, CA, May 2021.). At first, we develop a thrust calculation by examining forces within a control volume from freestream to nozzle exit. Using Newton's second law and key assumptions, we derive an expression for uninstalled thrust that considers momentum and pressure effects. Subsequently, we analyze drag components and their interaction with thrust forces during powered and unpowered flight phases",
        isAppendix: true,
        hasPage: true,
        pageUrl: "pages/thrust-drag.html"
    }
];

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = chaptersData;
}
