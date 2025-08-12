# Effective Moisture Penetration Depth, and Automatic Grid Generation in BSim for Moisture Calculations
Carsten Rode  
Institute for Buildings and Energy (BYGDTU)  
Technical University of Denmark  
[www.byg.dtu.dk](https://construct.dtu.dk/)  
June 2002

When using BSim for prediction of indoor humidity levels when considering moisture buffering in adjacent building materials, it is necessary to use rather fine layers (control volumes) in the calculation of the materials next to the indoor air. This note will set up the theory for the automatic grid generation mechanism.

Inline check: \(t_p\), \(s_{36.7\%}\), \(u_{60\%}-u_{40\%}\), \(10^{-5}\).

Block check:
$$
\omega = \frac{2\pi}{t_p} \tag{5}
$$

 

#### **Effective Moisture Penetration Depth**

For sinusoidal variation of the surface moisture content of a material, the amplitude of the variation at a certain depth in the material can be found as:

$$ \frac{u - u_\infty}{\Delta u} = e^{ \sqrt[-5]{ \frac{\omega}{2 D} } } \tag{1} $$

where:

\( u \)              is the peak value of the varying moisture content at a certain depth, kg/kg   
\( u_\infty \)       is the moisture content deep into the material (the mean value of the sinusoidal variation), kg/kg   
\( \Delta u \)      is the amplitude of the moisture content’s variation at the surface, kg/kg   
\( s \)              is the depth into the material, m   
\( \omega \)       is the angular frequency of the variations, s<sup>-1</sup>   
\( D \)             is the moisture diffusivity of the material, m²/s.

The depth at which there is only 1% variation in moisture content of the variation imposed at the surface can be determined, and can be understood as the Effective Moisture Penetration Depth, *s<sub>1%</sub>.* It can be found by putting  \( \frac{u - u_\infty}{\Delta u} \) equal to 0.01 (1%). Thus, \( 4.61 = s_{1\%} \sqrt{\frac{\omega}{2 D}} \), and consequently:

$$  s_{1\%} = 4.61 \sqrt{ \frac{2 D}{\omega} } \tag{2} $$

1 %, of course, is an arbitrary choice. Quite often, researchers have defined the moisture penetration depth from a similar equation by neglecting the coefficient, 4.61, before the square root:

$$  s_{36.7\%} = \sqrt{ \frac{2 D}{\omega} } \tag{3} $$

This depth is indeed, as indicated, a 36.7 % criterion for the determination of the penetration depth, i.e. at this depth the amplitude of moisture content variation is 36.7 % of the amplitude at the surface.

The moisture diffusivity of the material can be found from the following other material properties:

$$ D = \frac{ \delta \cdot p_s }{ \rho_0 \cdot \xi } \tag{4} $$

where:

\( \delta \)            is the water vapour permeability, kg/(m·s·Pa)
\( p_s \)           is the saturation vapour pressure (strongly temperature dependent), Pa   
\( \rho_0 \)          is the dry density of the material, kg/m  
\( \xi \)            is the specific moisture capacity of the material.

The angular frequency of the variation is:

$$ \omega = \frac{2 \pi}{t_p} \tag{5} $$

where:

\( \delta \) is the water vapour permeability, kg/(m·s·Pa)  
\( p_s \) is the saturation vapour pressure (strongly temperature dependent), Pa  
\( \rho_0 \) is the dry density of the material, kg/m  
\( \xi \) is the specific moisture capacity of the material.

The angular frequency of the variation is:

$$
\omega = \frac{2 \pi}{t_p} \tag{5}
$$

where:

\( \delta \) is the water vapour permeability, kg/(m·s·Pa)  
\( p_s \) is the saturation vapour pressure (strongly temperature dependent), Pa  
\( \rho_0 \) is the dry density of the material, kg/m  
\( \xi \) is the specific moisture capacity of the material.

The angular frequency of the variation is:

$$
\omega = \frac{2\pi}{t_p} \tag{5}
$$

where:

\( t_p \) is the time period of one cyclic variation, \(\mathrm{s}\).

Some of the parameters in the formulas written above are variable functions of the temperature or the humidity level, and also the time period of interest has to be chosen. For moisture penetration into walls and furnishing in contact with the indoor air the following choices will be made:

* Interesting temperatures are around \(20^\circ\mathrm{C}\), so the saturation vapour pressure is \(2340\,\mathrm{Pa}\).

* The indoor humidity variation is around \(50\%\ \mathrm{RH}\), so for the vapour permeability and the specific moisture capacity of the materials, values will be chosen for the materials when they are in equilibrium with \(50\%\ \mathrm{RH}\). The specific moisture capacity (slope of the sorption curve) can be calculated from the sorption curve values at \(40\%\) and \(60\%\ \mathrm{RH}\):

$$
\xi = \frac{u_{60\%} - u_{40\%}}{0.20} \tag{6}
$$

* Of interest are daily variations, so \( t_p = 24\,\mathrm{h} = 86400\,\mathrm{s} \), and \(\omega = 7.3 \times 10^{-5}\,\mathrm{s}^{-1}\).

With these assumptions and definitions of \(D\) and \(\omega\) inserted, \( s_{\mathrm{36.7\%}} \) can be calculated as:

$$
s_{\mathrm{36.7\%}}
= \sqrt{\frac{2 D\, t_p}{2\pi}}
= \sqrt{\frac{\delta\, p_s\, t_p}{\pi\, \rho_0\, \xi}}
= 3590\, \sqrt{\frac{\delta_{50\%}}{\rho_0 \,\bigl(u_{60\%} - u_{40\%}\bigr)}} \tag{7}
$$

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-0lax{text-align:left;vertical-align:top}
</style>
<table class="tg" style="margin-left: auto; margin-right: auto;">
<thead>
<tr>
<th class="tg-0lax" rowspan="2">

 

Material

</th>
<th class="tg-0lax">

Dry

density,

\( \rho_0 \)

</th>
<th class="tg-0lax" style="text-align: center;">

Vapour 

permeability

@ 50% RH

</th>
<th class="tg-0lax" style="text-align: center;">

Moisture

content, u

@ 40% RH

</th>
<th class="tg-0lax" style="text-align: center;">

Moisture

content, u

@ 60% RH

</th>
<th class="tg-0lax">

Effective

Moisture

Penetration

Depth, \( s_{36.7\%} \)

</th>
</tr>
<tr>
<th class="tg-0lax" style="text-align: center;">kg/m³</th>
<th class="tg-0lax" style="text-align: center;">kg/(m·s·Pa)</th>
<th class="tg-0lax" style="text-align: center;">kg/kg</th>
<th class="tg-0lax" style="text-align: center;">kg/kg</th>
<th class="tg-0lax" style="text-align: center;">m</th>
</tr>
</thead>
<tbody>
<tr>
<td class="tg-0lax">Plywood</td>
<td class="tg-0lax" style="text-align: center;">450</td>
<td class="tg-0lax" style="text-align: center;">2.50E-12</td>
<td class="tg-0lax" style="text-align: center;"><span style="letter-spacing: -0.14px;">0.0912</span></td>
<td class="tg-0lax" style="text-align: center;"><span style="letter-spacing: -0.14px;">0.121</span></td>
<td class="tg-0lax" style="text-align: center;"><span style="letter-spacing: -0.14px;">0.0016</span></td>
</tr>
<tr>
<td class="tg-0lax">Concrete</td>
<td class="tg-0lax" style="text-align: center;"><span style="letter-spacing: -0.14px;">2300</span></td>
<td class="tg-0lax" style="text-align: center;"><span style="letter-spacing: -0.14px;">2.50E-12</span></td>
<td class="tg-0lax" style="text-align: center;"><span style="letter-spacing: -0.14px;">0.0109</span></td>
<td class="tg-0lax" style="text-align: center;"><span style="letter-spacing: -0.14px;">0.0159</span></td>
<td class="tg-0lax" style="text-align: center;"><span style="letter-spacing: -0.14px;">0.0017</span></td>
</tr>
<tr>
<td class="tg-0lax">Gypsum</td>
<td class="tg-0lax" style="text-align: center;">900</td>
<td class="tg-0lax" style="text-align: center;"><span style="letter-spacing: -0.14px;">2.36E-11</span></td>
<td class="tg-0lax" style="text-align: center;"><span style="letter-spacing: -0.14px;">0.021</span></td>
<td class="tg-0lax" style="text-align: center;"><span style="letter-spacing: -0.14px;">0.041</span></td>
<td class="tg-0lax" style="text-align: center;"><span style="letter-spacing: -0.14px;">0.0041</span></td>
</tr>
<tr>
<td class="tg-0lax">Brick</td>
<td class="tg-0lax" style="text-align: center;">1600</td>
<td class="tg-0lax" style="text-align: center;"><span style="letter-spacing: -0.14px;">2.30E-11</span></td>
<td class="tg-0lax" style="text-align: center;"><span style="letter-spacing: -0.14px;">0.0025</span></td>
<td class="tg-0lax" style="text-align: center;"><span style="letter-spacing: -0.14px;">0.0031</span></td>
<td class="tg-0lax" style="text-align: center;"><span style="letter-spacing: -0.14px;">0.0176</span></td>
</tr>
<tr>
<td class="tg-0lax">Cellular concrete</td>
<td class="tg-0lax" style="text-align: center;">625</td>
<td class="tg-0lax" style="text-align: center;"><span style="letter-spacing: -0.14px;">3.00E-11</span></td>
<td class="tg-0lax" style="text-align: center;"><span style="letter-spacing: -0.14px;">0.0233</span></td>
<td class="tg-0lax" style="text-align: center;"><span style="letter-spacing: -0.14px;">0.0253</span></td>
<td class="tg-0lax" style="text-align: center;"><span style="letter-spacing: -0.14px;">0.0176</span></td>
</tr>
<tr>
<td class="tg-0lax">Mineral wool</td>
<td class="tg-0lax" style="text-align: center;">30</td>
<td class="tg-0lax" style="text-align: center;"><span style="letter-spacing: -0.14px;">1.57E-10</span></td>
<td class="tg-0lax" style="text-align: center;"><span style="letter-spacing: -0.14px;">0.0054</span></td>
<td class="tg-0lax" style="text-align: center;"><span style="letter-spacing: -0.14px;">0.0058</span></td>
<td class="tg-0lax" style="text-align: center;"><span style="letter-spacing: -0.14px;">0.4106</span></td>
</tr>
<tr>
<td class="tg-0lax">Cellulose insulation</td>
<td class="tg-0lax" style="text-align: center;">65</td>
<td class="tg-0lax" style="text-align: center;"><span style="letter-spacing: -0.14px;">1.10E-10</span></td>
<td class="tg-0lax" style="text-align: center;"><span style="letter-spacing: -0.14px;">0.0805</span></td>
<td class="tg-0lax" style="text-align: center;"><span style="letter-spacing: -0.14px;">0.113</span></td>
<td class="tg-0lax" style="text-align: center;"><span style="letter-spacing: -0.14px;">0.0259</span></td>
</tr>
</tbody>
</table>

 
| Test | test | test |
|:----:|:----:|:----:|
|   1  |   2  |   3  |
|   4  |   5  |   6  |
|   7  |   8  |   9  |
|   ![Visualisering af brugerfladen i BSim](https://s3.amazonaws.com/outseta-production/10526/0-06503c65ac922b3393247c393c926a2bb6d9166f_dcb1d5ed-370f-402a-bcbe-101b773442db.png) * Test dffadvdaa. as dasda f *   |      | f    |
|      |      | f    |
|      |      | f    |

\( s_{1\%} \) can be calculated from the values in the last column of the table by dividing them with 4.61.

 

#### **Automatic grid generation in BSim**

All of the above material properties can be taken from the already existing data in *BSim* (if moisture data are available in the material’s database for the relevant materials). For the calculation grid of materials next to an indoor climate, and if moisture calculations are chosen in *BSim,* it is suggested to use a grid, where the first control volume next to the indoor climate has a thickness of, say, 25 % of \( s_{36,7\%} \). Then, the grid should be expanding so that the second control volume is, say, 1.5 times the thickness of the first, the third control volume is 1.5 times the thickness of the second, and so forth. The distribution of control volume widths should be made once before the calculation starts (or when setting up the model). Of course, the last control volume of a layer should have the largest thickness of all its control volumes, but so that the total thickness of the layer becomes what it is supposed to be. So some appropriate mechanism for rounding the last one or two thicknesses would be required. The value proposed above for the thickness of the first control volume as a percentage of \( s_{36,7\%} \) should be a number that can be set by the user (25 % might be the default), and similarly for the expansion coefficient from one control volume to the next (the factor 1.5). It should be possible for the user to see (for control purposes) the automatically generated grid distribution. When calculations are made, it should preferably be possible for the user to save the results for the individual control volumes of a layer, e.g. by "sublayering" of layers next to an indoor climate.

The expanding grid generation should only be carried out for layers that are adjacent to an indoor climate (i.e. not for the layers in the middle of, or on the exterior side of a construction).


# SimDB - BuildingMaterial, Frame
<div id="da">

Dette faneblad indeholder alene en U-værdi og fremkommer kun, når der er valgt materialer fra en af [SfB-materialegrupperne](https://bsim.outseta.com/support/kb/articles/DQ2xwBWV/sfb-i-bsim) "b" eller "c". Værdien benyttes, hvis materialet indgår som en ramme-/karmkonstruktion (*frame*) eller en fyldning (*panel*) i en WinDoor.

![U-værdien for en ramme-/karmkonstruktion (Edit Material | Frame) eller en fyldning. Benyttes, når materialet indgår som en del af en WinDoor.](https://s3.amazonaws.com/outseta-production/10526/0-DBFRAME_a43bfc67-676c-4230-8ebc-3751c64fa042.GIF)

I henhold til [DS418, tillæg 1](https://bsim.outseta.com/support/kb/articles/A93zbqQ0/litteratur) kan følgende værdier benyttes for U-værdien af vinduesrammer.

For rammer og karme af træ eller beklædt træ anvendes transmissionskoefficienten angivet i nedenstående figur, medmindre der er bestemt en nøjagtigere værdi. Ved bestemmelse af tykkelsen af rammer og karme af træ ses der bort fra eventuelle inddækninger af metal eller plast. ved forskellig tykkelse af fx ramme og karm anvendes middelværdien. Ved koblede rammer anvendes den samlede tykkelse af rammerne.

![Transmissionskoefficient U_ramme i W/m2K for rammer og karme af træ og beklædt træ.](https://s3.amazonaws.com/outseta-production/10526/0-U-FRAME_940167a3-b83b-46c2-a094-54fa2ac2556b.GIF)

For rammer og karme af plast eller metal anvendes transmissionskoefficienterne angives i følgende tabel, medmindre der er bestemt en nøjagtigere værdi. For PUR-profiler forudsættes metalforstærkningen dækket af mindst 5 mm polyuretanskum. Ved PVC-profiler forudsættes, at der højst er metalforstærkning i ét kammer, og at afstanden mellem vægoverfladerne i alle kamre er mindst 5 mm. Transmissionskoefficienten for metalprofiler med brudt kuldebro afhænger meget af detailudformningen og må derfor bestemmes specifikt for det enkelte profil.

</div>
<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-3xi5{background-color:#ffffff;border-color:inherit;text-align:center;vertical-align:top}
.tg .tg-c6of{background-color:#ffffff;border-color:inherit;text-align:left;vertical-align:top}
.tg .tg-0lax{text-align:left;vertical-align:top}
</style>
<div>
<div> </div>
</div>
<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-o5v9{background-color:#ffffff;border-color:inherit;color:#333333;text-align:left;vertical-align:top}
.tg .tg-ncgp{background-color:#ffffff;border-color:inherit;color:#333333;text-align:center;vertical-align:top}
.tg .tg-7euo{background-color:#ffffff;color:#333333;text-align:left;vertical-align:top}
</style>
<div id="da">
<table class="tg" style="margin-left: auto; margin-right: auto;">
<thead>
<tr>
<th class="tg-ncgp" style="text-align: center;"><span style="color: #200024; font-family: Arial;"><span style="font-size: 15px;"> </span></span></th>
<th class="tg-o5v9" style="text-align: center;"><span style="color: #200024; font-family: Arial;"><span style="font-size: 15px;">W/m²K</span></span></th>
</tr>
</thead>
<tbody>
<tr>
<td class="tg-o5v9">

<span style="color: #200024; font-family: Arial;"><span style="font-size: 15px;">Plastprofiler </span></span>

*   <span style="color: #200024; font-family: Arial;"><span style="font-size: 15px;">PUR-profiler   
</span></span>

*   <span style="color: #200024; font-family: Arial;"><span style="font-size: 15px;">2-kammer PVC-profiler</span></span>

*   <span style="color: #200024; font-family: Arial;"><span style="font-size: 15px;">3-kammer PVC-profiler</span></span>

</td>
<td class="tg-o5v9">

 

<span style="color: #200024; font-family: Arial;"><span style="font-size: 15px;">2,6  
2,1  
1,9</span></span>

</td>
</tr>
<tr>
<td class="tg-7euo">

<span style="color: #200024; font-family: Arial;"><span style="font-size: 15px;">Metalprofiler </span></span>

*   <span style="color: #200024; font-family: Arial;"><span style="font-size: 15px;">uden brudt kuldebro   
</span></span>

</td>
<td class="tg-7euo" style="text-align: center;">

5,9<span style="color: #200024; font-family: Arial;"><span style="font-size: 15px;">  
</span></span>

</td>
</tr>
</tbody>
</table>

*Transmissionskoefficient* *U<sub>ramme  </sub>i W/m²K for rammer og karme af plast- eller metalprofiler*.

For vinduer med selvstændige rammer og en afstand mellem rammerne på mindst 10 mm beregnes transmissionskoefficienten som:

![](https://s3.amazonaws.com/outseta-production/10526/0-UFrame_f996489f-5a03-40fa-9944-b400a575b43a.GIF)

hvor *U<sub>u</sub>*  og *U<sub>i</sub>*  er transmissionskoefficienten for henholdsvis den udvendige og den indvendige del af vinduet.

 

Se også:

*   [Faneblad Material](https://help.bsim.dk/support/kb/articles/4966z49X/simdb---buildingmaterial-material)

*   [Faneblad Moisture](https://help.bsim.dk/support/kb/articles/wQXx4nQK/simdb---buildingmaterial-moisture)

*   [Faneblad Thermal](https://help.bsim.dk/support/kb/articles/y9q8b2QA/simdb---buildingmaterial-thermal)

*   [Faneblad Environment](https://help.bsim.dk/support/kb/articles/nmDBzx9y/simdb---buildingmaterial-environment)

*   [Faneblad Glazing](https://help.bsim.dk/support/kb/articles/7maw2j9E/simdb---buildingmaterial-glazing)

*   [Faneblad UserDefined](https://help.bsim.dk/support/kb/articles/xmerM5QV/simdb---buildingmaterial-userdefined)

*   [Faneblad Frame](https://help.bsim.dk/support/kb/articles/ZmNreEm2/simdb---buildingmaterial-frame)

 

</div>

 

 

 

<div id="en">

This tab only contains a U-value and only appears when materials from [SfB](https://bsim.outseta.com/support/kb/articles/DQ2xwBWV/sfb-i-bsim) material groups "b" or "c" have been selected. The value is used if the material forms part of a WinDoor as a frame construction or panel.

![U-value for a frame construction or panel. Used when the material forms part of a WinDoor.](https://s3.amazonaws.com/outseta-production/10526/0-dbframe_b679b150-bc46-4d11-af92-15989150fe4b.gif)

According to the Danish norm [DS418, amendment 1](https://bsim.outseta.com/support/kb/articles/A93zbqQ0/litteratur) the following values can be used as U-values for window frames.

For frames made of wood or covered wood the values can be obtained from the figure below, as a function of the type of wood and the thickness of the frame. This values can be used if a more accurate value is not known. By determining the thickness of frame made of wood, an eventual cover made of metal or plastic is neglected. If the frame have varying thickness, the average value can be used. Having coupled frames (two or more separate glazings) the total thickness of the frame can be used.

![Transmission coefficient Uframe in W/m2K for frames made of wood or covered wood.](https://s3.amazonaws.com/outseta-production/10526/0-u-frame_e326dc87-5e9c-45fa-af83-0402b79fb183.gif)

For frames made of plastic or metal the transmission coefficients given in the following table can be used, unless a more accurate value is known. For PUR-profilers a metal bearing is expected to be covered wit at least 5 mm polyuretan foam. For PVC-profiles it is anticipated that there will be metal enforcement in a maximum of one chamber, and that the distance between the surface in all chambers is at least 5 mm. The transmission coefficient for metal profiles with broken cold-bridge depends strongly on the actual design and must thus be determined for each profile individually.

</div>
<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-3xi5{background-color:#ffffff;border-color:inherit;text-align:center;vertical-align:top}
.tg .tg-c6of{background-color:#ffffff;border-color:inherit;text-align:left;vertical-align:top}
.tg .tg-0lax{text-align:left;vertical-align:top}
</style>
<div>
<div> </div>
</div>
<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-o5v9{background-color:#ffffff;border-color:inherit;color:#333333;text-align:left;vertical-align:top}
.tg .tg-ncgp{background-color:#ffffff;border-color:inherit;color:#333333;text-align:center;vertical-align:top}
.tg .tg-7euo{background-color:#ffffff;color:#333333;text-align:left;vertical-align:top}
</style>
<div id="en">
<table class="tg" style="margin-left: auto; margin-right: auto;">
<thead>
<tr>
<th class="tg-ncgp" style="text-align: center;"><span style="color: #200024; font-family: Arial;"><span style="font-size: 15px;"> </span></span></th>
<th class="tg-o5v9" style="text-align: center;"><span style="color: #200024; font-family: Arial;"><span style="font-size: 15px;">W/m²K</span></span></th>
</tr>
</thead>
<tbody>
<tr>
<td class="tg-o5v9">

Plastic profiles

*   <span style="color: #200024; font-family: Arial;"><span style="font-size: 15px;">PUR-profilers   
</span></span>

*   <span style="color: #200024; font-family: Arial;"><span style="font-size: 15px;">2-chamber PVC-profiles   
</span></span>

*   <span style="color: #200024; font-family: Arial;"><span style="font-size: 15px;">3-chamber PVC-profiles   
</span></span>

</td>
<td class="tg-o5v9">

 

<span style="color: #200024; font-family: Arial;"><span style="font-size: 15px;">2,6  
2,1  
1,9</span></span>

</td>
</tr>
<tr>
<td class="tg-7euo">

Metal profiles

*   <span style="color: #200024; font-family: Arial;"><span style="font-size: 15px;">without broken cold bridge</span></span>

</td>
<td class="tg-7euo" style="text-align: center;">

5,9<span style="color: #200024; font-family: Arial;"><span style="font-size: 15px;">  
</span></span>

</td>
</tr>
</tbody>
</table>

*Transmission coefficient U<sub>frame </sub>in W/m²K for frames made of plastic or metal profiles.*

For windows with individual frames and a distance of at least 10 mm between the frames, the transmission coefficient can be calculated as:

![](https://s3.amazonaws.com/outseta-production/10526/0-UFrame_f996489f-5a03-40fa-9944-b400a575b43a.GIF)

where *U<sub>u</sub>* and *U<sub>i</sub>* is the transmission coefficient for respectively the external and the internal part of the window.

 

See also:

*   [Tab Material](https://help.bsim.dk/support/kb/articles/4966z49X/simdb---buildingmaterial-material)

*   [Tab Thermal](https://help.bsim.dk/support/kb/articles/y9q8b2QA/simdb---buildingmaterial-thermal)

*   [Tab Moisture](https://help.bsim.dk/support/kb/articles/wQXx4nQK/simdb---buildingmaterial-moisture)

*   [Tab Environment](https://help.bsim.dk/support/kb/articles/nmDBzx9y/simdb---buildingmaterial-environment)

*   [Tab Glazing](https://help.bsim.dk/support/kb/articles/7maw2j9E/simdb---buildingmaterial-glazing)

*   [Tab UserDefined](https://help.bsim.dk/support/kb/articles/xmerM5QV/simdb---buildingmaterial-userdefined)

*   [Tab Frame](https://help.bsim.dk/support/kb/articles/ZmNreEm2/simdb---buildingmaterial-frame)

</div>

 
