import type { MDXComponents } from 'mdx/types'
import { Alert } from '@/app/components/Alert'
import { Autocomplete } from '@/app/components/Autocomplete'
import { Avatar } from '@/app/components/Avatar'
import { Badge } from '@/app/components/Badge'
import { Button } from '@/app/components/Button'
import { Check } from '@/app/components/Check'
import { Pill } from '@/app/components/Pill'
import { ColorPicker } from '@/app/components/ColorPicker'
import { FloatButton } from '@/app/components/FloatButton'
import { Input } from '@/app/components/Input'
import { Link } from '@/app/components/Link'
import { Pagination } from '@/app/components/Pagination'
import { Progress } from '@/app/components/Progress'
import { ScrollArea } from '@/app/components/ScrollArea'
import { Select,SelectOption } from '@/app/components/Select'
import { Separator } from '@/app/components/Separator'
import { Slider } from '@/app/components/Slider'
import { Snippet } from '@/app/components/Snippet/Snippet'
import { Switch } from '@/app/components/Switch'
import { Table, TableBody, TableHead } from '@/app/components/Table'
import { Textarea } from '@/app/components/Textarea'
import { Tooltip } from '@/app/components/Tooltip/Tooltip'
import * as Typographic from '@/app/components/Typography'

export function useMDXComponents (): MDXComponents {
  return {
    // ...components,
    Alert,
    Autocomplete,
    Avatar,
    Button,
    Badge,
    Check,
    ColorPicker,
    FloatButton,
    Input,
    Link,
    Pagination,
    Pill,
    Progress,
    ScrollArea,
    Select,
    SelectOption,
    Separator,
    Slider,
    Snippet,
    Switch,
    Table, TableBody, TableHead,
    Textarea,
    Tooltip,
    ...Typographic
  }
}
