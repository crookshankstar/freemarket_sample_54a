json.array! @category_grandchildren do |grandchild|
  json.id grandchild.id
  json.name grandchild.name
end

json.array! @sizelist do |size|
  json.id   size.id
  json.name size.name
end