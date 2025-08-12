# Effective Moisture Penetration Depth, and Automatic Grid Generation in BSim for Moisture Calculations
Carsten Rode  
Institute for Buildings and Energy (BYGDTU)  
Technical University of Denmark  
[www.byg.dtu.dk](https://construct.dtu.dk/)  
June 2002

When using BSim for prediction of indoor humidity levels when considering moisture buffering in adjacent building materials, it is necessary to use rather fine layers (control volumes) in the calculation of the materials next to the indoor air. This note will set up the theory for the automatic grid generation mechanism.

 

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

\( t_p \) is the time period of one cyclic variation, s.

Some of the parameters in the formulas written above are variable functions of the temperature or the humidity level, and also the time periodic of interest has to be chosen. For moisture penetration into walls and furnishing in contact with the indoor air the following choices will be made:

*   Interesting temperatures are around 20 °C, so the saturation vapour pressure is 2340 Pa.

*   The indoor humidity variation is around 50 % RH, so for the vapour permeability and the specific moisture capacity of the materials values will be chosen for the materials when they are in equilibrium with 50 % RH. The specific moisture capacity (slope of the sorption curve) can be calculated from the sorption curve values at 40 and 60 % RH:

$$ \xi = \frac{ u_{60\%} - u_{40\%} }{ 0.20 } \tag{6} $$

*   Of interest are daily variations, so \( t_p \) will be 24 h (86400 s), and w will be 7.3·10<sup>-5</sup> s<sup>-1</sup>.

With these assumptions and definitions of D and ω inserted, \( s_{36.7\%} \) can be calculated as:

$$  s_{36.7\%} = \sqrt{ \frac{2 D \cdot t_i}{2\pi} } = \sqrt{ \frac{\delta \cdot p_s \cdot t_p}{\pi \cdot \rho_0\cdot \xi} } = 3590 \sqrt{ \frac{\delta_{50\%}}{\rho_0 \cdot (u_{60} - u_{40})} } \tag{7} $$

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

 

\( s_{1\%} \) can be calculated from the values in the last column of the table by dividing them with 4.61.

 

#### **Automatic grid generation in BSim**

All of the above material properties can be taken from the already existing data in *BSim* (if moisture data are available in the material’s database for the relevant materials). For the calculation grid of materials next to an indoor climate, and if moisture calculations are chosen in *BSim,* it is suggested to use a grid, where the first control volume next to the indoor climate has a thickness of, say, 25 % of \( s_{36,7\%} \). Then, the grid should be expanding so that the second control volume is, say, 1.5 times the thickness of the first, the third control volume is 1.5 times the thickness of the second, and so forth. The distribution of control volume widths should be made once before the calculation starts (or when setting up the model). Of course, the last control volume of a layer should have the largest thickness of all its control volumes, but so that the total thickness of the layer becomes what it is supposed to be. So some appropriate mechanism for rounding the last one or two thicknesses would be required. The value proposed above for the thickness of the first control volume as a percentage of \( s_{36,7\%} \) should be a number that can be set by the user (25 % might be the default), and similarly for the expansion coefficient from one control volume to the next (the factor 1.5). It should be possible for the user to see (for control purposes) the automatically generated grid distribution. When calculations are made, it should preferably be possible for the user to save the results for the individual control volumes of a layer, e.g. by "sublayering" of layers next to an indoor climate.

The expanding grid generation should only be carried out for layers that are adjacent to an indoor climate (i.e. not for the layers in the middle of, or on the exterior side of a construction).

 
