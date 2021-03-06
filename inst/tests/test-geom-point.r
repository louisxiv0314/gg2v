context("geom_point")

library(ggplot2)
set.seed(1014)
df <- data.frame(x = runif(5), y = runif(5), z = runif(5))

base <- ggplot(df, aes(x, y))

base + geom_point()
save_spec("geom/point.js")

base + geom_point(size = 20, colour = "red", shape = 1)
save_spec("geom/point-params.js")

base + geom_point(aes(colour = z))
save_spec("geom/point-colour.js")
