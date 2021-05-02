import KMEANS from "../kmeans";
import { KMeans, Vectors } from "../kmeans";

var sectionalNums:number=10; //declared variable for number of sectionals, set its value to 10 (lines 509, 513)

/*************************************************************/
//We need a way to change its value based on what the user types in
//Find that drop down "number of scetionals" button in the code 
//and see about a way of grabbing their input when the user presses "ENTER"

const input_data: Vectors = [
	[ 38.7102179, -85.471719 ],
	[ 39.88570199999999, -86.148265 ],
	[ 39.6906434, -86.10781829999999 ],
	[ 39.2247317, -85.9111673 ],
	[ 41.3467725, -85.1268665 ],
	[ 39.8301525, -86.028578 ],
	[ 39.2926055, -85.7700062 ],
	[ 39.8897639, -86.1209724 ],
	[ 38.2987932, -85.8110215 ],
	[ 40.83544089999999, -84.9097075 ],
	[ 41.6391921, -86.0242741 ],
	[ 41.190198, -85.192605 ],
	[ 37.973365, -87.4856221 ],
	[ 38.823844, -86.17186 ],
	[ 39.3516992, -85.9708433 ],
	[ 40.473575, -85.9722795 ],
	[ 41.63950690000001, -85.9617466 ],
	[ 41.291663, -87.393821 ],
	[ 39.7200089, -85.89027430000002 ],
	[ 41.3128995, -87.0219989 ],
	[ 37.9637555, -87.5398945 ],
	[ 39.8338133, -86.1853628 ],
	[ 41.395982, -87.1658174 ],
	[ 39.6345265, -84.92126069999999 ],
	[ 39.4256537, -87.4086657 ],
	[ 40.0510064,  ],
	[ 38.8825761, -86.4407155 ],
	[ 39.68223589999999, -86.3785364 ],
	[ 38.2009707, -86.1193358 ],
	[ 37.97356380000001, -87.6061272 ],
	[ 39.89353699999999, -86.143404 ],
	[ 41.082914, -85.6352871 ],
	[ 39.4194664, -86.4116121 ],
	[ 38.1204493, -86.9868071 ],
	[ 40.3955167, -86.2428446 ],
	[ 41.7109893, -86.9025721 ],
	[ 39.6117983, -85.8734102 ],
	[ 41.0754802, -85.1487872 ],
	[ 41.1111362, -86.0427577 ],
	[ 38.7910505, -87.30965239999999 ],
	[ 39.765816, -86.068934 ],
	[ 40.7601763, -86.0725535 ],
	[ 40.43532769999999, -86.0547709 ],
	[ 40.6516995, -86.0658023 ],
	[ 41.617463, -85.538989 ],
	[ 39.602931, -86.11696889999999 ],
	[ 41.4658068, -87.4730886 ],
	[ 39.9348001, -84.91231119999999 ],
	[ 41.3294601, -85.0506417 ],
	[ 41.6356983, -85.9286979 ],
	[ 41.1077269, -85.08243139999999 ],
	[ 40.7348927, -87.08473099999999 ],
	[ 41.028479, -86.890402 ],
	[ 41.5557479, -87.31512459999999 ],
	[ 41.39182659999999, -87.0258513 ],
	[ 40.3749463, -86.0535977 ],
	[ 40.9347524, -87.1358991 ],
	[ 40.9112106, -86.2811641 ],
	[ 40.2199448, -85.7723113 ],
	[ 38.5655254, -85.5414253 ],
	[ 40.6642995, -86.86279900000001 ],
	[ 38.0528076, -87.2790425 ],
	[ 39.4606165, -87.4896802 ],
	[ 38.68073649999999, -85.7809205 ],
	[ 41.2192291, -85.79597319999999 ],
	[ 39.82019349999999, -84.90052229999999 ],
	[ 38.2394083, -85.9888677 ],
	[ 41.728413, -84.93793529999999 ],
	[ 40.8960503, -86.06615409999999 ],
	[ 37.9034486, -87.106274 ],
	[ 37.9102913, -86.7438865 ],
	[ 38.678324, -86.922016 ],
	[ 39.8131337, -84.9991623 ],
	[ 39.8814458, -86.25071249999999 ],
	[ 41.6011891, -86.7268627 ],
	[ 41.4347459, -85.257449 ],
	[ 38.433741, -87.242316 ],
	[ 38.4001918, -85.7358344 ],
	[ 40.7399858, -85.7792588 ],
	[ 40.1685329, -85.2634822 ],
	[ 40.1080198, -85.3931312 ],
	[ 41.2250781, -86.4255321 ],
	[ 39.75457, -86.8781882 ],
	[ 41.6391359, -85.2001714 ],
	[ 41.5521309, -87.1683276 ],
	[ 39.69776969999999, -87.3221118 ],
	[ 41.7277848, -86.331558 ],
	[ 40.0510064, -86.1304132 ],
	[ 41.66975619999999, -85.7350955 ],
	[ 41.60579329999999, -87.50959639999999 ],
	[ 38.4081936, -85.7553138 ],
	[ 40.1829374, -85.4937837 ],
	[ 39.7929437, -86.2931356 ],
	[ 41.6790759, -86.108057 ],
	[ 39.0255378, -86.9459796 ],
	[ 41.6757012, -86.22156679999999 ],
	[ 38.3314698, -87.3513688 ],
	[ 39.788792, -86.15530389999999 ],
	[ 39.8224805, -85.6577423 ],
	[ 40.436141, -86.9118518 ],
	[ 38.6678738, -86.45446720000001 ],
	[ 38.0820509, -86.00194069999999 ],
	[ 41.04594700000001, -86.59630399999999 ],
	[ 39.5841972, -86.1230913 ],
	[ 41.522286, -84.91995899999999 ],
	[ 40.0928616, -85.6674874 ],
	[ 39.80084, -86.252904 ],
	[ 39.8322102, -85.35113220000001 ],
	[ 41.5465057, -87.45795269999999 ],
	[ 40.7515141, -86.3325643 ],
	[ 41.3013211, -86.10853449999999 ],
	[ 40.3985978, -86.8758502 ],
	[ 41.4944455, -87.3298741 ],
	[ 38.40240319999999, -86.9502047 ],
	[ 40.8673476, -86.8755843 ],
	[ 39.7273196, -86.1474722 ],
	[ 41.2417828, -86.2503017 ],
	[ 41.5200779, -87.2318198 ],
	[ 40.855702, -85.794668 ],
	[ 38.30640390000001, -85.7844334 ],
	[ 40.058319, -86.4624662 ],
	[ 39.7569997, -86.5401579 ],
	[ 40.0104107, -86.0878736 ],
	[ 40.74207579999999, -86.7701417 ],
	[ 40.4187467, -86.7983371 ],
	[ 39.9118103, -85.3778894 ],
	[ 41.1937181, -87.1986416 ],
	[ 40.1260147, -86.90672649999999 ],
	[ 39.9587127, -86.2729923 ],
	[ 39.7956007, -85.5263629 ],
	[ 38.0106898, -87.49498129999999 ],
	[ 40.975684, -84.96250700000002 ],
	[ 40.251284, -86.5920069 ],
	[ 37.9372802,  ],
	[ 39.7312519, -86.1242086 ],
	[ 39.7361572, -86.3886078 ],
	[ 41.0578505, -86.2239488 ],
	[ 40.0059557, -85.5245303 ],
	[ 39.670824, -86.143028 ],
	[ 39.10041409999999, -84.8542642 ],
	[ 38.4543684, -85.6672466 ],
	[ 41.1382677, -85.4814371 ],
	[ 40.3532529, -86.08798639999999 ],
	[ 39.6725742, -85.70174329999999 ],
	[ 41.4254052, -85.5808959 ],
	[ 38.3245452, -85.8278258 ],
	[ 38.798089, -85.8366396 ],
	[ 39.9799754, -86.119833 ],
	[ 38.368701, -87.5712537 ],
	[ 41.065179, -85.013209 ],
	[ 39.6433429, -86.8437592 ],
	[ 38.4509433, -86.7964178 ],
	[ 41.4792721, -87.17921369999999 ],
	[ 38.651115, -87.50047219999999 ],
	[ 41.6403209, -87.4853127 ],
	[ 39.5243282, -86.64245140000001 ],
	[ 39.97728439999999, -85.965577 ],
	[ 37.9544498, -86.76347690000001 ],
	[ 38.7412863, -85.0799978 ],
	[ 39.8881082, -86.0574213 ],
	[ 41.5314779, -87.4375855 ],
	[ 39.3108997, -85.23415829999999 ],
	[ 40.4141819, -86.596074 ],
	[ 40.205017, -84.815247 ],
	[ 39.3428778, -85.4679725 ],
	[ 38.322028, -86.1441722 ],
	[ 39.4410806, -85.84558439999999 ],
	[ 41.3128296, -87.1996494 ],
	[ 41.6281603, -87.4919649 ],
	[ 40.20104, -85.388736 ],
	[ 41.5930723, -87.4073713 ],
	[ 40.3927809, -86.8870068 ],
	[ 40.052241, -84.9455942 ],
	[ 39.8163113, -85.16705449999999 ],
	[ 41.4086638, -85.04036889999999 ],
	[ 39.4530489, -85.66230430000002 ],
	[ 41.2141338, -86.78695530000002 ],
	[ 40.5462021, -85.5079116 ],
	[ 40.579319, -85.821725 ],
	[ 37.9888227, -87.6158605 ],
	[ 39.1431494, -86.5287046 ],
	[ 40.0773686, -85.8404654 ],
	[ 39.86181759999999, -86.1275101 ],
	[ 41.5421062, -86.8944264 ],
	[ 38.6588562, -87.16799499999999 ],
	[ 39.2795231, -87.1093873 ],
	[ 38.88618900000001, -86.0454716 ],
	[ 38.6282793, -85.7753886 ],
	[ 39.6201179, -86.3768316 ],
	[ 38.7728199, -85.4020839 ],
	[ 39.7333845, -86.15212369999999 ],
	[ 39.8767352, -86.5421187 ],
	[ 39.2340568, -86.6381617 ],
	[ 39.51196460000001, -86.7911159 ],
	[ 40.3264255, -86.3927764 ],
	[ 40.880603, -85.1663593 ],
	[ 39.2023625, -86.5490592 ],
	[ 39.7651095, -86.1991575 ],
	[ 41.398205, -85.41856299999999 ],
	[ 40.384526, -85.6763689 ],
	[ 41.5804716, -85.8233391 ],
	[ 38.7581139, -85.3889876 ],
	[ 41.0541247, -85.2120692 ],
	[ 40.057381, -86.61975100000001 ],
	[ 39.9015402, -85.8444647 ],
	[ 40.0019205, -85.32864459999999 ],
	[ 39.2046253, -86.2439528 ],
	[ 39.8128605, -86.2156115 ],
	[ 39.85667, -86.0382149 ],
	[ 41.5890906, -87.0646117 ],
	[ 41.32, -86.89 ],
	[ 39.0637306, -84.92923259999999 ],
	[ 39.7827876, -86.2934069 ],
	[ 41.6506953, -86.1975998 ],
	[ 39.2254733, -87.39053059999999 ],
	[ 39.9458131, -86.3645604 ],
	[ 41.5771782, -87.24519579999999 ],
	[ 40.5458593, -86.48054189999999 ],
	[ 38.5504533, -86.61587150000001 ],
	[ 38.6115128, -86.1066246 ],
	[ 39.6366808, -85.1605745 ],
	[ 39.8489339, -86.8022295 ],
	[ 39.0510358, -85.2483537 ],
	[ 40.278546, -85.34763799999999 ],
	[ 39.7829242, -86.169851 ],
	[ 39.7686071, -87.2333753 ],
	[ 39.7761846, -86.13337659999999 ],
	[ 41.46420699999999, -86.816215 ],
	[ 40.2725473, -86.03957539999999 ],
	[ 41.558364, -87.2803287 ],
	[ 41.6625271, -86.1618228 ],
	[ 38.514589, -86.00228899999999 ],
	[ 39.6875126, -86.274232 ],
	[ 39.6860448, -86.06171250000001 ],
	[ 39.9548397, -86.2126732 ],
	[ 40.066309, -85.6906747 ],
	[ 40.4987152, -85.6128418 ],
	[ 41.2229063, -86.4161192 ],
	[ 39.8181082, -86.1552244 ],
	[ 41.285422, -86.6259141 ],
	[ 41.6810258, -86.23992489999999 ],
	[ 40.313376, -85.5006776 ],
	[ 38.3327561, -85.930774 ],
	[ 39.6760364, -86.01595089999999 ],
	[ 41.6810164, -87.4937826 ],
	[ 38.029056, -87.577349 ],
	[ 40.2900924, -85.83534590000001 ],
	[ 38.9564996, -85.9061744 ],
	[ 39.0354756, -87.0472317 ],
	[ 39.972324, -85.91561899999999 ],
	[ 39.12848049999999, -85.12753520000001 ],
	[ 40.139807, -86.217169 ],
	[ 40.276809, -87.2514159 ],
	[ 41.6969951, -86.0137518 ],
	[ 41.1314342, -85.1251644 ],
	[ 41.5370947, -86.27150669999999 ],
	[ 39.8961663, -86.0349536 ],
	[ 39.1138334, -86.5453533 ],
	[ 41.6851334, -85.95887359999999 ],
	[ 39.7932862, -85.7819176 ],
	[ 38.1424196, -87.80153829999999 ],
	[ 39.0312243, -86.7376298 ],
	[ 38.3193875, -86.3528504 ],
	[ 41.4435666, -86.152644 ],
	[ 40.7461276, -84.9424082 ],
	[ 39.4288148, -84.998817 ],
	[ 39.8346569, -86.1358527 ],
	[ 39.7434072, -86.0885837 ],
	[ 40.29861229999999, -87.38645269999999 ],
	[ 41.3473756, -86.3027616 ],
	[ 41.4606821, -85.9980441 ],
	[ 40.14312, -87.3953339 ],
	[ 38.6691205, -87.0491546 ],
	[ 37.9716319, -87.5368038 ],
	[ 41.1051339, -85.0457916 ],
	[ 41.4180015, -85.7589398 ],
	[ 41.0016349, -85.14034629999999 ],
	[ 41.6778243, -86.8624962 ],
	[ 41.0975724, -85.1354575 ],
	[ 40.806979, -85.82508899999999 ],
	[ 38.228591, -86.85648789999999 ],
	[ 38.274853, -86.9651751 ],
	[ 38.9988337, -85.6410784 ],
	[ 39.8520967, -86.0798184 ],
	[ 37.9372802, -87.8879265 ],
	[ 38.9499436, -84.8599749 ],
	[ 38.6348312, -87.4205388 ],
	[ 41.6544786, -86.2433179 ],
	[ 39.7113969, -86.07653499999999 ],
	[ 41.1104098, -85.11800389999999 ],
	[ 40.5764436, -86.6647018 ],
	[ 38.6781059, -87.5342538 ],
	[ 41.6753115, -86.315173 ],
	[ 41.6539964, -85.4101481 ],
	[ 39.9204461, -85.16106049999999 ],
	[ 38.19409, -87.340918 ],
	[ 41.1235004, -84.91912719999999 ],
	[ 41.0430292, -85.28614999999999 ],
	[ 41.4930768, -87.06773369999999 ],
	[ 39.0436706, -87.1642755 ],
	[ 39.3831089, -85.477679 ],
	[ 38.298365, -85.7681357 ],
	[ 39.40715429999999, -86.16050249999999 ],
	[ 40.1967204, -85.41227459999999 ],
	[ 41.7319028, -86.2383969 ],
	[ 41.4321074, -84.86233109999999 ],
	[ 38.5506576, -86.47722399999999 ],
	[ 39.665807, -86.559061 ],
	[ 41.6666024, -86.2239488 ],
	[ 41.23181659999999, -85.3242078 ],
	[ 37.9858808, -87.3841739 ],
	[ 39.1407312, -85.2931808 ],
	[ 37.9729899, -87.5686546 ],
	[ 40.6636628, -86.2533541 ],
	[ 40.8612098, -86.49349509999999 ],
	[ 39.5518498, -86.0841784 ],
	[ 39.76759759999999, -86.20242770000002 ],
	[ 39.6211095, -85.4490007 ],
	[ 39.1595628, -87.2123124 ],
	[ 40.8079239, -87.3843312 ],
	[ 40.607691, -85.27991469999999 ],
	[ 39.3425846, -85.2007007 ],
	[ 39.7923501, -85.9987618 ],
	[ 39.511817, -86.0884774 ],
	[ 40.5639565, -87.2423965 ],
	[ 39.7740683, -86.19138579999999 ],
	[ 40.1063712, -87.2271677 ],
	[ 39.1951678, -85.8861986 ],
	[ 41.6180157, -87.5235886 ],
	[ 38.5459302, -85.7729703 ],
	[ 41.5540111, -87.50254079999999 ],
	[ 38.6664401, -86.7911096 ],
	[ 40.5389673, -85.66869109999999 ],
	[ 40.4293504, -85.0226964 ],
	[ 40.3498875, -86.90143959999999 ],
	[ 41.0525403, -85.1365921 ],
	[ 39.9970733, -85.7350955 ],
	[ 40.18138769999999, -84.9747648 ],
	[ 41.5476024, -87.4091306 ],
	[ 41.2241533, -85.8647852 ],
	[ 38.4667284, -85.9458044 ],
	[ 41.378695, -87.4580749 ],
	[ 38.583932, -86.23446600000001 ],
	[ 40.72556180000001, -85.1638208 ],
	[ 41.0119751, -85.7713251 ],
	[ 39.9104297, -86.2098686 ],
	[ 40.2813193, -86.4849653 ],
	[ 39.3084449, -85.57889999999999 ],
	[ 41.0348281, -87.4250106 ],
	[ 40.047306, -85.14148709999999 ],
	[ 38.2371497, -87.6349872 ],
	[ 41.5756843, -87.4870145 ],
	[ 41.2200549, -85.0178239 ],
	[ 38.6592224, -87.17403379999999 ],
	[ 41.5455389, -85.8266256 ],
	[ 41.6781582, -87.5069676 ],
	[ 39.96784299999999, -87.453126 ],
	[ 39.5179259, -87.1657103 ],
	[ 39.10540659999999, -87.41130009999999 ],
	[ 40.1184688, -85.5545355 ],
	[ 40.1656354, -86.01550560000001 ],
	[ 41.5975589, -87.338747 ],
	[ 41.5103768, -87.3335219 ],
	[ 41.6011394, -87.3838638 ],
	[ 39.5062308, -85.789248 ],
	[ 41.4844011, -86.9945464 ],
	[ 39.6483986, -86.1665921 ],
	[ 38.1158294, -87.5520172 ],
	[ 38.9854537, -85.8779601 ],
	[ 38.111115, -86.604096 ],
	[ 41.586398, -87.439764 ],
	[ 39.8249876, -84.8953034 ],
	[ 39.7684575, -86.085293 ],
	[ 39.9119447, -86.12965059999999 ],
	[ 41.3886536, -86.5519008 ],
	[ 40.0209269, -86.90744409999999 ],
	[ 40.4555488, -86.1572119 ],
	[ 41.1457583, -85.1393406 ],
	[ 39.575635, -86.478105 ],
	[ 41.035264, -85.133105 ],
	[ 41.6318244, -84.9716567 ],
	[ 41.4574282, -86.4799099 ],
	[ 40.0563564, -85.99796429999999 ],
	[ 39.2792013, -84.97479109999999 ],
	[ 39.6444898, -86.8647316 ],
	[ 41.5177497, -85.76778589999999 ],
	[ 39.5755892, -86.194643 ],
	[ 39.49413910000001, -87.3624615 ],
	[ 38.7366461, -86.4800423 ],
	[ 40.0865443, -85.6802457 ],
	[ 40.19159, -85.1675489 ],
	[ 39.8298485, -86.11456869999999 ],
	[ 40.8920241, -85.51004449999999 ],
	[ 40.2521566, -85.6783201 ],
	[ 38.3163151, -85.7114758 ],
	[ 41.6852237, -86.56465829999999 ],
	[ 40.6473144, -84.9602961 ],
	[ 39.288654, -86.78154699999999 ],
	[ 39.8299773, -86.38797079999999 ],
	[ 41.5982845, -87.3920034 ],
	[ 41.1884715, -87.1497211 ],
	[ 39.7868616, -86.0853726 ],
	[ 38.8474324, -87.0621139 ],
	[ 39.6908521, -87.415174 ],
	[ 39.511817, -86.0884774 ],
	[ 39.4530489, -85.66230430000002 ],
	[ 38.2371497, -87.6349872 ],
	[ 41.0119751, -85.7713251 ],
	[ 38.7910505, -87.30965239999999 ],
	[ 41.4435666, -86.152644 ],
	[ 39.7929437, -86.2931356 ],
	[ 39.96784299999999, -87.453126 ],
	[ 39.4256537, -87.4086657 ],
	[ 40.579319, -85.821725 ],
	[ 39.6201179, -86.3768316 ],
	[ 40.4986657, -86.91388769999999 ],
	[ 38.824855, -86.1700012 ],
	[ 39.10540659999999, -87.41130009999999 ],
	[ 41.2229063, -86.4161192 ],
	[ 39.68223589999999, -86.3785364 ],
	[ 41.5930723, -87.4073713 ],
	[ 39.7932862, -85.7819176 ],
	[ 41.714197, -86.21259380000001 ],
	[ 41.1457583, -85.1393406 ],
	[ 40.9112106, -86.2811641 ],
	[ 41.0348281, -87.4250106 ],
	[ 40.880603, -85.1663593 ],
	[ 39.0733789, -87.2712797 ],
	[ 39.2023625, -86.5490592 ],
	[ 37.9707971, -87.441391 ],
	[ 41.5465057, -87.45795269999999 ],
	[ 41.6318244, -84.9716567 ],
	[ 39.0436706, -87.1642755 ],
	[ 37.9707971, -87.441391 ],
	[ 40.473575, -85.9722795 ],
	[ 38.19409, -87.340918 ],
	[ 38.7728199, -85.4020839 ],
	[ 38.88618900000001, -86.0454716 ],
	[ 39.9970733, -85.7350955 ],
	[ 39.9119447, -86.12965059999999 ],
	[ 39.7893338, -86.80237149999999 ],
	[ 40.1063712, -87.2271677 ],
	[ 41.5975589, -87.338747 ],
	[ 41.41921, -87.5088765 ],
	[ 39.8099777, -86.1929676 ],
	[ 39.9587127, -86.2729923 ],
	[ 40.9347524, -87.1358991 ],
	[ 38.3163151, -85.7114758 ],
	[ 38.4699787, -85.94676 ],
	[ 41.3878349, -87.360475 ],
	[ 39.1431494, -86.5287046 ],
	[ 38.3245452, -85.8278258 ],
	[ 41.3878349, -87.360475 ],
	[ 39.0733789, -87.2712797 ],
	[ 40.2900924, -85.83534590000001 ],
	[ 40.4986657, -86.91388769999999 ],
	[ 41.41921, -87.5088765 ],
	[ 39.4194664, -86.4116121 ],
	[ 41.39182659999999, -87.0258513 ],
	[ 41.6852237, -86.56465829999999 ],
	[ 39.8814458, -86.25071249999999 ],
	[ 40.8612098, -86.49349509999999 ],
	[ 39.8099777, -86.1929676 ],
	[ 39.6444898, -86.8647316 ],
	[ 40.205017, -84.815247 ],
	[ 39.9210895, -86.1587224 ],
	[ 40.18138769999999, -84.9747648 ],
	[ 41.1875401, -87.2051731 ],
    [ 38.3245452, -85.8278258 ],
    [ 41.3878349, -87.360475 ],
    [ 39.0733789, -87.2712797 ],
    [ 40.2900924, -85.83534590000001 ],
    [ 40.4986657, -86.91388769999999 ],
    [ 41.41921, -87.5088765 ],
    [ 39.4194664, -86.4116121 ],
    [ 41.39182659999999, -87.0258513 ],
    [ 41.6852237, -86.56465829999999 ],
    [ 39.8814458, -86.25071249999999 ],
    [ 40.8612098, -86.49349509999999 ],
    [ 39.8099777, -86.1929676 ],
    [ 39.6444898, -86.8647316 ],
    [ 40.205017, -84.815247 ],
    [ 39.9210895, -86.1587224 ],
    [ 40.18138769999999, -84.9747648 ],
    [ 41.1875401, -87.2051731 ],
    [ 39.7683207, -86.11197039999999 ],
    [ 41.5561186, -87.3684334 ],
    [ 39.8171446, -86.24371470000001 ],
    [ 38.4001918, -85.7358344 ],
    [ 41.6969951, -86.0137518 ],
    [ 39.7982497, -86.13068330000002 ]
]

//var output: KMeans = KMEANS(input_data, 2, "kmeans");

console.log("k means++");
var kmeans1: KMeans = KMEANS(input_data,sectionalNums, "kmeans++");  //replaced group number itself w/ sectionalNums
console.log(JSON.stringify(kmeans1));

console.log("k means");
var kmeans2: KMeans = KMEANS(input_data, sectionalNums, "kmeans"); //replaced group number itself w/ sectionalNums
console.log(JSON.stringify(kmeans2));