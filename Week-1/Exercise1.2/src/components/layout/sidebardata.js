const menudata = [
  {
    mainlabel: "",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAZ0lEQVR4nO3WwQmAQAwF0SlPt/+zC4t9RGxAZRH84DzIPTkEBiRJek8DOlDh04H16pARsGQ9nP0Xh6zAFrBk3cy54zL7P5IkSR9pZjxZ9TsCyrbMeEmSpGzNjCerfkdAnpcZL0kScw7zFAKxsVXx1wAAAABJRU5ErkJggg==",
    open: false,
    href: "#",
  },
  {
    mainlabel: "Home",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAyklEQVR4nO3UvQnCUBSG4VcLK8HGCVzAHax0AUdwBVdwBt3BzlowqGQKQdu0NgpeEU4ghBhP7o+F3g8+CIdwHzi5BGJ0GQAH4CjPX8kIyAAjzWSWZy/zxCc6A24FNO8dmMs7xblzOsCqAix36RPuA1sFWlXrDIGTJWoNT4GrA2rkDHVaclEejqiRMxZA+xPaBdYewHI3QK8OTgOgedM6OAkI7zTf2TeqToSNYm3BV/0uETZx1Zr83+W6ePx7nZvAE0/4Cx03gWN+J09NOXSle/Ic7gAAAABJRU5ErkJggg==",
    open: false,
    href: "#",
  },
  {
    mainlabel: "Search",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACiklEQVR4nO2ZzWtTURDFf25ixSiIiO22FdutG8FFa2PpX+CytRQLotD/waILrXv3piCIyySk7VYXfrRd+rVx407blaI2FSNXbyAMk7SJM3kv+g4MhMA95x3umzsz90GGDKnEELAArABbwDZQi/EJ2ASKwFVgkBRiEqgAP4D6AWMPKAMTpABngLUOHr5VVIGRpEzMAV8MTDTiMzDbaxO32jzQa+AOMAWMAkdjjMX/7gJv2qxf6pWJ2y0e4AVQ6IDnAvA0KTNziugucA041AVfWHM9ckjeGRwTW+ZEOF7HDbjDybWj5MwwDpCn066RiQYuxnrTrFHBoU7IrQ+vkzVuKDrjlgIVQf68y5zYD4HzpdAqWbYde4I8vAZeKCgdwGkL4gVB/Ap/vBWa8xakK4I0FDtvLAvNBxakW4I0VGdvTAvNDQvSbUF6Fn+MCs2PFqSy6ubxR15ofvcwcgx/HFeq/D/xar23IN1MQbI/syAtCtIwT3jjntC871EQw1DkjXdC87IF6aDSooQm0gtTSpd90oq8rEyDXk2jzMmipcCE0l6Hyc4ai4rOOWuRqhCoGd9JFZTB6iEOGImFqVlox6iln1RG3XAzeQonzCpbX4uTXbeXD4vKToR4AuRwxJIi2uhQL3V4OsnEllEFBpIwU49D0XKszmOxAczH39Ox2Mk60S5K3jszo+SMV5SBw55mhpWLiU7jJ/AYWE/aDPHKpqR0AO3iG/AIOP+b4U8urO6zptILM8Tbjvk4Y2/EIzS0GF+BD/GqJzSAV4ATyvpUmflb5JSWqC5i1fs066WZtcxMAsj9bzuzDhyhDzBwgNOs598fPXbmJn2GnGKm70xoZvrWRHPOuH0szZCB1vgFpd/exdTtQfAAAAAASUVORK5CYII=",
    open: false,
    href: "#",
  },
  {
    mainlabel: "Sound",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADTElEQVR4nO2ZXWhPYRzHP8bG8hKjKUx2IS7sUkrRKBmFlHIjF4oL5IJcSFZEU3ZhIyXlwkuSt3mbl1xQJBeb18IY1lxgY4XMzDY99Tt6Ws/z/P/n5f8//1P/b52b8/2d55zPOc/L7/kdyCuvRGkIsBVoB7qAI0AxCVMRcAkYGHTUkDCIBgOEOt6QIIgrFgh19PlsbxoxaDhw1QHhHelqk8TfBmaSYxB+QGYDn+WaP0A1UJDp7nQ5TQg/IEpjgTqgV65tBMaRoS9x3QeEXxBP87Wv8wQoIWaIoCBKU4Bn0sYjYAwRQTQGgBhI0UXvAGeAMkvMROCVtNMgi25gjQgB4QIZDXRKzHdgtSVOQXZI3OYwEDdCQKTqWlO1dagf2GGJWyZ+N1AepDuFhUh3jGyXxdP11o+Lf1I/qZK5euCb4carJOZABBB+Bvt6eet/gbmWwf9LgCu8k4ccNy6VmHdZBtFf3lvpEYN1UPzD3omvjht7M0N/xCAjgb3AWkd6XwS8kOu2GPxZ4nVKbFo3jgJCb2+Bdq4NqLTArJCYdkuK0iR+VVwg6qHWAS+1fGqx4UFVj2iVmIUGv0a8PXGBeBoKHBXvCzDeELNP/FqDt1K8W3GDeG/9vvjVBr9KvHsGr1zrnrGDKC0Vv9ky1Srvo8EbJd6PXAEpFf+nwSsWT60bJv322s6DEH3XarIkionoWmqwPxB/l8FfIt5dx2D/kAvT7zFt+i1xTL8qZbFNvzfjXBA3aBulHmBRigXRtPrvF293LqQo74F5uFOUNkuK0qynKHEkjcWSNK6xZLaDk0bTvqRCvA4vaax33HiCXNSaoTHiUq1c02KBrRNfPf//t1Nn+TLq0+rJWbY3Vr3AHMuU3C0bK5XOZ6wQFwZkm+wMB2RCcG11T/iBSKfSHgXIZK39Pvm/YtJyrfgQuNAdFsYmtZ58kpguWR9slRavHLQxKESqHzlhv8gp4DQwyVGgey3tXAwLERYmqMqA59LGQynoRaZCeTOZBqnUitiPM1WRVzAXsvRb4Zqcy5j8wAT5ldAD7AxbtI4aJl1Va0WFGWRZCua8A8K2VTVpGDCdGKVgzllAnpIwFQJnDSCmsmfOq0B+D7TIoK2R1TuvvEiY/gEUDoIJtiJv8QAAAABJRU5ErkJggg==",
    open: false,
    href: "#",
  },
  {
    mainlabel: "User",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABtklEQVR4nO2ZPShFYRjHf5dEsriSrAwWGViUkiQMRh8Li7JZZVDko5QySBYGCzIZZRZyDcrHjUSxiluyuK7u0VvnLqeLc895OM/N+dV/fHuf3zmn932f80JISEhQ1ABDwBywAiwBE0ALECEP6ASOAeubHABRFDMPpH+QyOQBWAUaUMaoSwFn3oFhlFAOvHgUMUkB9Shg0IdEJmsoYFNA5BoFxAREPoDioEVuBERMyoIWuRUSKQ1a5EhAwqx6gbMjIHKKAqYFRJZRQI+ASC8KaBQQaUIBewIiuyjgUkDkAgVsCYhsoICOHPqQbDFj21FCtw+RLpRx50HCHG/UsehBxIxRRy2QzLEzrEMps/n+NjJEXO4r90Ahyom5EImTB5y4ELkiD4i7/EGnmiLg0YXIK1CCYqZyWLUWUEgUWPdw5jL/xCpRQBUw6fJz+ipPwAxQHYRAq/0033wIOJMEtoG2375DKbB76zPB4r/KOdBvzylK8x8JWFmEzNwijNgHPCugpOwafDHgs/uTShro83OB86xAwrKTACq8iIwrKN5yZMyLyKGCwi1H9r2IJBQUbmXZPENCQv4rn6Ej5y2yxDtPAAAAAElFTkSuQmCC",
    open: false,
    href: "#",
  },

  {
    mainlabel: "Spotify",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADoklEQVR4nO2ZWYhOYRjHf6IZY8tYRvY1N0QppSyRQmQLWSLcyBKRLeJG2YbsFJdyI3eW7EIpQ+HKMobB2C5kmSRjhqOn/mp8c875zjnf+b7vJP/61+nre973/Z/neZ/3ec4L//Hvoh0wHdgPXAReAJ8AR/yk3y7pPzOA9iQERcB84Brws96ig/KnbBdorJyjGbAOeB9h8V60sdZr7JxgElAZo4BUVmqOrKGpYtvJEY8DzeMW0RF4kEMRjmhzdopLRC/geR5EOPVCrU+mIkqA8jyKcMRXQNeoIiwd3kuACEe8HzVFH0vA4p0U2ppCYUICFu14cGJQEea+ZwlYsOPBl0HT8poELNZJw7VBDr23Ad7IOWAHsFSuHqQ03QEoBhoBTfTcBegNDAcWAluBk0oktRGFvEu38ef6GJ+J83ASLERGAzuBJyHFWLHqiUs+hp3JPgYCh4EvAYRc8RrEwqDOxzDygRQBLYFNKf2MWwvQxs14Spo3cBboqdN+GLAY2AucAm4p01kp/hH4pfi35yrgsZqtI8BqVbdWv6VDsfaj15qmuRntzkP2qVAojVFycEM3H3t7kQ3gpzwXfANsUeYLKuSCm5AkFIcO8BXYpnRuvOzzXwvnBvgQYrJq4IZcu0QlTT+gh+K6AGisZ9tTfRU+y4AD6tO/xSD6s5uQmoDG233iOQwKdYYcU1KIIqROh+9f+B7QuBXxo5myYEUcQoKG1vgUO0vJo/RJZ708ZuFzFNinUmaDUmV/ecILBcAqhUzk0ApaIlhsnwauh5iwPn9oAy8HunsIGhlwLPNgA5yNYfNF4VUXL7cJaHveTciuPAn5Q/PwCKCtwjKIzR43IZMjTF4tT27Sd98BOsBaa8xi7aEhwCKd4ndVwsQhfqqbkNZpisZUbsggDVsBuhK4nYGIOr0oV5wPMVAL4sFQ4GYEIRf9Bp0TYqCNaowGq6I9obCpUjb7pZRerg1te3Cmrh9S0UgedkLQmkBPWI5/neVNXau3OS8lNK0HCVNgWlvui5VZFlKfTxQFFuubQ9jZoZkWhWqEnISyIog3/mBsAhbseHAcIXEwAYt2UniICLAQK0vA4h3xTpqC0xftErJfKlxa4NDonuc2+KnKnFhQkqcwK9PcsaJQl6FxFXxBLkOLyCLGZDnUyjVHTmDeWaG6Ki4BNtaKTDJTJrAee5Y+7kW5IqiV7ex8CXBDK92VlKqnf6jqt0a050e6nijVf7PxReY/SAJ+A3ixZQqUXqPKAAAAAElFTkSuQmCC",
    open: false,
    href: "#",
  },
  {
    mainlabel: "Setting",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABAUlEQVR4nOWVQQrCMBBFn661ot5C96I30F2h2KV6Ak9Tt+rSI7kTFMEDqDutBEYoMYkGIyh+GCjtn//LTGYC/4IBcARyCfXcD2mwLIjfYxFKvA1sDAbqXctXrARkwApIgRlwNYjf4yqcVHIy0bBi4hDLX4yxTbwC7AMYHIDIZDB1JG2BBKhKxMDawVdaD+gBJ4t4w8CvyzedrzS6tjJ1gLOWkDh6NtS4Z9FwojhQuZTEhkjjqlxCGtR8DUwlih381KdEtiavpaE6msDOp8nPjulQah7Jn+98j+nHBw0Z83cNRjhQ1pZdBlwcYhfhFJed0vBCK+S6tmFhMJjzS1cmX4sbSsHWENa8dO8AAAAASUVORK5CYII=",
    open: false,
    href: "#",
  },
  {
    mainlabel: "Sound Cloud",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABZElEQVR4nO2YvUoDQRCAPwURwSIqCBZaWOQdrHwH/x5AbHwBG8WIT+IT5BB7sTJYKGKZJiCJhQiKpggijiyMEoU742Xj7V3mg+Gmm/luf25vwTAMwzAMY2iZAraBE+AW6ABtoA5UgS2gRMBMAIfACyC/xCOwB4wTGIvATQ8CP+MCmCcgiWYKCdFoAHMEwHUfEqJxCYwNutFlfdZ10aJv8Uhz8RQ7g5Q40yLdDcfl/cYzMOlbYKnH5n2KCLDpU6Ks22MWIpFPkdM/NO9bpOFTRDIUeVcZdxq4A46BDWA0qeFZ4EDz164dKUsRSfhwLsSJPKRsOAsR0RH6JrPqsfn/FBGgBoy4ojPAU45FBFh3RSuem89CJHJFrwog0kKPAXkX6RRFpFmUqRW5ovsFEFlzRadTHghDETn//I44VnIq0or7v7/PkUgt6ZLC3T/tat4OTORNR6Cqa+JrOhmGYRiGYRjGcPEBz/UQP9VIFRMAAAAASUVORK5CYII=",
    open: false,
    href: "#",
  },
];

export { menudata };
