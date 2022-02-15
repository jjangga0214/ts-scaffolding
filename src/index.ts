import publicIp from 'public-ip'
import { internalIpV6, internalIpV4 } from 'internal-ip'

async function main() {
  console.log(`public ip v4: ${await publicIp.v4()}`)
  //= > '46.5.21.123'

  // console.log(`public ip v6: ${await publicIp.v6()}`)
  //= > 'fe80::200:f8ff:fe21:67cf'

  console.log(`private ip v4: ${await internalIpV4()}`)
  //= > '10.0.0.79'

  console.log(`private ip v6: ${await internalIpV6()}`)
  //= > 'fe80::1'
}

main()
