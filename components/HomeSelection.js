import { BanIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { CalendarIcon, CollectionIcon, DatabaseIcon, EyeIcon, SpeakerphoneIcon, TerminalIcon, DocumentReportIcon } from '@heroicons/react/outline'
import Link from 'next/link'

const items = [
  {
    name: 'TEST - MongoDB Annotations',
    description: '',
    href: '/api/annotations',
    iconColor: 'bg-cyan-500',
    icon: DatabaseIcon,
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function HomeSelection() {
  return (
    <div className="max-w-lg mx-auto mt-20 px-8 md:px-4">
      <ul role="list" className="mt-6 border-t border-b border-gray-200 divide-y divide-gray-200">
        {items.map((item, itemIdx) => (
          <li key={itemIdx} onClick={item.fct}>
            <div className="relative group py-4 flex items-start space-x-3">
              <div className="flex-shrink-0">
                <span
                  className={classNames(item.iconColor, 'inline-flex items-center justify-center h-10 w-10 rounded-lg')}
                >
                  <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-medium text-gray-900">
                    <Link href={item.href}>
                    <a href={item.href}>
                        <span className="absolute inset-0" aria-hidden="true" />
                        {item.name}
                    </a>
                  </Link>
                </div>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
              <div className="flex-shrink-0 self-center">
                <ChevronRightIcon className="h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}