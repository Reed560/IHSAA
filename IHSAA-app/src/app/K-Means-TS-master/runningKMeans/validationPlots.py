import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import descartes
import geopandas as gpd
from shapely.geometry import Point, Polygon

# fig = plt.figure()
# ax1 = fig.add_subplot(111)

indiana = gpd.read_file('indianaShapeFile/tl_2010_18_tabblock10.shp')

# indiana['centroid'] = indiana.centroid

indiana['geometry'].plot()

# indiana["centroid"].plot(ax=ax, color="black")

plt.show()

g1 = np.array([
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
    [ 39.4256537, -87.4086657 ]
  ])


g1 = g1.T

# print(g1.shape)
# print(g.shape)

# print(g)

# ax1.scatter(g1[0], g1[1], s=15, c='b', marker="s", label='first')

# plt.show()