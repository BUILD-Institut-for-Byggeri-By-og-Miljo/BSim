<link rel="stylesheet" href="../style.css">

# Fugtbalancen for en zone

I den simple form er fugtbalancen for en zone beregnet efter samme princip som zonens varmebalance, idet der dog regnes med færre kilder for fugtudveksling. Det er dog også muligt at simulere fugtudveksling med konstruktionerne efter en [detaljeret model](https://help.bsim.dk/support/kb/articles/vW5alXW4/detailed-moisture-balance) der taget hensyn til absorption og frigivelse af fugt fra de materialer konstruktionerne består af.

Zonens fugttilskud stammer fra personer, andre fugtbelastninger i zonen samt de fugttilskud, der kan være i forbindelse med de tre former for lufttilførsel: [infiltration](https://help.bsim.dk/support/kb/articles/Rm8JRZ94/infiltration-system), [udluftning](https://help.bsim.dk/support/kb/articles/gWKDJlmp/venting-system) samt (mekanisk) [ventilation](https://help.bsim.dk/support/kb/articles/OW4N5AQg/ventilation-system). Hertil kommer det fugttilskud, der kan være ved tilførsel af luft fra nabozoner, [mixing](https://help.bsim.dk/support/kb/articles/Rm8JEd94/mixing-system). Der regnes derimod ikke med affugtning af rumluften ved kondensation i zonen, hverken på kolde overflader af vinduer eller konstruktioner eller på køleradiatorens overflade.

Den væsentligste forskel i forhold til princippet for opstilling af varmebalancen er, at der ikke tages hensyn til den udveksling af fugt med konstruktionernes materialer, der skyldes disses hygroskopiske egenskaber.

 

### **Fugtproduktion i zonen**

Fugttilførsel fra personer og forskellige former for befugtning samles i én parameter, G<sub>luft,last </sub>, der angiver massen af vanddamp, der tilføres luften pr. tidsenhed (kg/h). Denne størrelse er styret af de fugtproducerende enheders tidsplaner og reguleringer.

 

### **Fugttilførsel ved ventilation**

Ved luftskifte med udeluften regnes med fuldstændig opblanding inden luften forlader zonen. Derved bliver fugttilførslen:

$$
G_{luft, vent} = n_{ventind} \cdot V \cdot \rho_{luft} \cdot (x_{ventind} - x_{luft} \tag{21} )
$$
 
|Hvor | |
|-------------------------|---------------------------------------------------|
| $G_{\text{luft,last}}$  | er fugttilførsel ved luftskifte med udeluft, kg/h |
| $n_{\text{ventind}}$    | er luftskiftet ved ventilation (ind), 1/h         |
| $x_{\text{ventind}}$    | er vandindhold i den tilførte ventilationsluft, kg/kg |
| $x_{\text{luft}}$       | er luftens vandindhold i zonen, kg/kg             |


### **Fugttilførsel ved mixing**

På tilsvarende måde beregnes fugttilførslen ved lufttilførsel fra andre zoner:

$$
G_{luft, mixind} = \sum_{zoner} n_{mixind} \cdot V \cdot \rho_{luft} \cdot (x_{mixind} - x_{luft}) \tag{22} )
$$
 
|Hvor  |  |
|---------------------------|---------------------------------------------------------|
| $G_{\text{luft,mixind}}$  | er fugttilførsel ved lufttilførsel fra andre zoner, kg/h |
| $n_{\text{mixind}}$       | er luftskiftet ved mixing (ind), 1/h                    |
| $x_{\text{mixind}}$       | er vandindhold i den tilførte luft fra nabozone, kg/kg  |
| $x_{\text{luft}}$         | er luftens vandindhold i zonen, kg/kg                   |


### **Zonens samlede fugtbalance**

Ved at addere bidragene til zonens fugtbalance og sætte denne sum til 0 (svarende til at zonens luft ikke regnes at have nogen fugtkapacitet), fås følgende udtryk for vandindholdet i zonen:

$$  x_{luft} = \frac {G_{luft, last} \cdot V \cdot \rho_{luft} \left( n_{vent} \cdot x_{vent} + \sum_{zoner} n_{mixind} \cdot x_{mixind} \right) } {V \cdot \rho_{luft} \left( n_{ventud} + \sum_{zoner} n_{mixud} \right)} \tag{23} $$

|Hvor   |        |
|-----------------------|------------------------------------------------------------|
| $x_{\text{luft}}$     | er det resulterende vandindhold i zoneluften, kg/kg         |
| $n_{\text{ventud}}$   | er luftskiftet ved ventilation (ud), 1/h                   |
| $n_{\text{mixud}}$    | er luftskiftet ved mixing (ud), 1/h                        |

<br>
Det bemærkes, at de enkelte bidrag til ventilationen hver for sig ikke behøver være i balance. For eksempel er det muligt at definere mixing, således at der kun tilføres luft fra nabozonerne mens der ikke går luft fra den aktuelle zone til nogen nabozone. Dette vil fx være realistisk for et rum, der er forsynet med mekanisk udsugning.
